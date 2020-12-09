Ball.Game = function (game) { };
Ball.Game.prototype = {
	create: function () {
		this.add.sprite(0, 0, 'screen-bg');
		this.add.sprite(0, 0, 'panel');
		this.physics.startSystem(Phaser.Physics.ARCADE);
		this.fontSmall = { font: "16px Arial", fill: "#e4beef" };
		this.fontBig = { font: "24px Arial", fill: "#e4beef" };
		this.fontMessage = { font: "24px Arial", fill: "#e4beef", align: "center", stroke: "#320C3E", strokeThickness: 4 };
		this.audioStatus = false;
		this.timer = 0; // czas w aktualnym poziomie
		this.totalTimer = 0; // czas w ca�ej grze
		this.level = 1;
		this.maxLevels = 6;
		this.movementForce = 10;
		this.ballStartPos = { x: Ball._WIDTH * 0.5, y: 450 };
		// czas w grze
		this.timerText = this.game.add.text(15, 15, "Czas: " + this.timer, this.fontBig); //czas w aktualnym poziomie, wy�wietlanie, okre�lenie pozycji
		this.levelText = this.game.add.text(120, 10, "Poziom: " + this.level + " / " + this.maxLevels, this.fontSmall);//czas w ca�ej grze, wy�wietlanie, okre�lenie pozycji
		this.totalTimeText = this.game.add.text(120, 30, "Ogolny czas: " + this.totalTimer, this.fontSmall);// aktualizowany co sekund� 
		// dzurka do kt�rej musi wpa�� pi�ka aby przej�� poziom 
		this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, 'hole'); // dodajemy do�ek 
		this.physics.enable(this.hole, Phaser.Physics.ARCADE);// w��czenie silnika Physics.ARCADE do�ek ma si� nie rusza� przy wpdaniu pi�ki 
		this.hole.anchor.set(0.5); // zakotwiczenie do�ka 
		this.hole.body.setSize(2, 2); // roziar do�ka 

		// pi�ka
		this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, 'ball'); // dodajemy sprite czyli nasz� kulk� w danym miejscu na ekranie 
		this.ball.anchor.set(0.5); // kotwica wszelkich oblicze� fizycznych na �rodku pi�ki 
		this.physics.enable(this.ball, Phaser.Physics.ARCADE); // w��czenie silnika Physics.ARCADE (obs�uguje ca�� fizyk� ruchu pi�ki) 
		this.ball.body.setSize(18, 18); // rozmiar pi�ki 
		this.ball.body.bounce.set(0.3, 0.3); // natrafienie na przeszkod� 

		this.initLevels();
		this.showLevel(1);
		this.keys = this.game.input.keyboard.createCursorKeys(); // funkcja kt�ra da nam obiekt z obs�ug� zdarze� dla czterech klawiszy strza�ek do zabawy: w g�r�, w d�, w lewo i w prawo

		Ball._player = this.ball;

		this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

		this.borderGroup = this.add.group();
		this.borderGroup.enableBody = true;
		this.borderGroup.physicsBodyType = Phaser.Physics.ARCADE;
		this.borderGroup.create(0, 50, 'border-horizontal');
		this.borderGroup.create(0, Ball._HEIGHT - 2, 'border-horizontal');
		this.borderGroup.create(0, 0, 'border-vertical');
		this.borderGroup.create(Ball._WIDTH - 2, 0, 'border-vertical');
		this.borderGroup.setAll('body.immovable', true);

	},
	initLevels: function () {// inicjalizuje dane poziomu
		this.levels = [];
		this.levelData = [ // budowa labiryntu blokowego , tablica danych poziumu dla karzdego bloku w pikselach mam pozycj� oraz typ bloku poziomy lub pionowy 
			[
				{ x: 96, y: 224, t: 'w' }
			],
			[
				{ x: 72, y: 320, t: 'w' },
				{ x: 200, y: 320, t: 'h' },
				{ x: 72, y: 150, t: 'w' }
			],
			[
				{ x: 64, y: 352, t: 'h' },
				{ x: 224, y: 352, t: 'h' },
				{ x: 0, y: 240, t: 'w' },
				{ x: 128, y: 240, t: 'w' },
				{ x: 200, y: 52, t: 'h' }
			],
			[
				{ x: 78, y: 352, t: 'h' },
				{ x: 78, y: 320, t: 'w' },
				{ x: 0, y: 240, t: 'w' },
				{ x: 192, y: 240, t: 'w' },
				{ x: 30, y: 150, t: 'w' },
				{ x: 158, y: 150, t: 'w' }
			],
			[
				{ x: 188, y: 352, t: 'h' },
				{ x: 92, y: 320, t: 'w' },
				{ x: 0, y: 240, t: 'w' },
				{ x: 128, y: 240, t: 'w' },
				{ x: 256, y: 240, t: 'h' },
				{ x: 180, y: 52, t: 'h' },
				{ x: 52, y: 148, t: 'w' }
			],
			[
				{ x: 30, y: 125, t: 'w' },
				{ x: 0, y: 125, t: 'h' },
				{ x: 200, y: 125, t: 'w' },
				{ x: 200, y: 155, t: 'h' },
				{ x: 104, y: 283, t: 'w' },
				{ x: 0, y: 352, t: 'h' },
				{ x: 60, y: 410, t: 'w' },
				{ x: 30, y: 352, t: 'w' },
				{ x: 200, y: 410, t: 'w' },
				{ x: 150, y: 352, t: 'w' },
				{ x: 260, y: 225, t: 'h' },
				{ x: 30, y: 222, t: 'w' }

			]

		];
		for (var i = 0; i < this.maxLevels; i++) {
			var newLevel = this.add.group(); // tworzenie nowej grupy element�w
			newLevel.enableBody = true;
			newLevel.physicsBodyType = Phaser.Physics.ARCADE;// ustawienie typu, umo�liwa obliczenia fizyczne
			for (var e = 0; e < this.levelData[i].length; e++) {
				var item = this.levelData[i][e];
				newLevel.create(item.x, item.y, 'element-' + item.t);// metoda tworzy nowe pozycje w grupie
			}
			newLevel.setAll('body.immovable', true);// nie trzeba przegl�da� wszystkich element� listy by doda� w�a�ciow�ci dla karzdego z nich
			newLevel.visible = false;
			this.levels.push(newLevel);
		}
	},
	showLevel: function (level) {//informacje dotycz�ce poziomu wy�wietlone na ekranie 
		var lvl = level | this.level; //     za�adowanie poszczeg�lnych poziom�w kt�re s� przechowywane w this.levels domy�lnie nie widoczna pokazujemy tylko bierz�cy poziom 
		if (this.levels[lvl - 2]) {
			this.levels[lvl - 2].visible = false;
		}
		this.levels[lvl - 1].visible = true;
	},
	updateCounter: function () {  // aktualizuje czas sp�dzony na grze na ka�dym poziomie i rejestruje ca�kowity czas sp�dzony na grze
		this.timer++;
		this.timerText.setText("Czas: " + this.timer);
		this.totalTimeText.setText("Ogolny czas: " + (this.totalTimer + this.timer));
	},
	managePause: function () { },// zatrzymuje i wznawia gr�.
	manageAudio: function () { },// w��cza i wy��cza d�wi�k.
	update: function () { // akualizacja wykonywana w ka�dej klatce np. pozycja pi�ki
		if (this.keys.left.isDown) { // poruszanie si� 
			this.ball.body.velocity.x -= this.movementForce;
		}
		else if (this.keys.right.isDown) {
			this.ball.body.velocity.x += this.movementForce;
		}
		if (this.keys.up.isDown) {
			this.ball.body.velocity.y -= this.movementForce;
		}
		else if (this.keys.down.isDown) {
			this.ball.body.velocity.y += this.movementForce;
		}
		// okre�lenie koliduj�cych obiekt�w 
		this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
		this.physics.arcade.collide(this.ball, this.levels[this.level - 1], this.wallCollision, null, this);
		this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);// pi�ka nie zderza si� z do�kiem tylko nachodzi na siebie overlap, wywo�uje finishLevel
	},
	wallCollision: function () { },// jest wykonywany, gdy pi�ka uderzy w �ciany lub inne przedmioty
	handleOrientation: function (e) { },// ori�tacja urz�dzenia mobilnego, ruch pi�ki w zale�no�ci od wychylenia inna pr�dko�� 

	// �aduje nowy poziom, gdy bie��cy poziom jest zako�czony, lub ko�czy gr�, je�li ostatni poziom jest uko�czony
	finishLevel: function () {
		if (this.level >= this.maxLevels) {
			this.totalTimer += this.timer;
			alert('Gratulacje gra ukonczona!\nTotal calkowity czas gry: ' + this.totalTimer + ' sekund!');
			this.game.state.start('MainMenu');
		}
		else {
			alert('Gratulacje, pozim ' + this.level + ' zaliczony!');
			this.totalTimer += this.timer;
			this.timer = 0;
			this.level++;
			this.timerText.setText("Czas: " + this.timer);
			this.totalTimeText.setText("Ogolny czas: " + this.totalTimer);
			this.levelText.setText("Poziom: " + this.level + " / " + this.maxLevels);
			this.ball.body.x = this.ballStartPos.x;
			this.ball.body.y = this.ballStartPos.y;
			this.ball.body.velocity.x = 0;
			this.ball.body.velocity.y = 0;
			this.showLevel();
		}
	},
	render: function () {
		// this.game.debug.body(this.ball);
		// this.game.debug.body(this.hole);
	}
};