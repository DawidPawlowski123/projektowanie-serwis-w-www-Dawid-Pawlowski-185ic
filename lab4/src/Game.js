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
		this.totalTimer = 0; // czas w ca³ej grze
		this.level = 1;
		this.maxLevels = 6;
		this.movementForce = 10;
		this.ballStartPos = { x: Ball._WIDTH * 0.5, y: 450 };
		// czas w grze
		this.timerText = this.game.add.text(15, 15, "Czas: " + this.timer, this.fontBig); //czas w aktualnym poziomie, wyœwietlanie, okreœlenie pozycji
		this.levelText = this.game.add.text(120, 10, "Poziom: " + this.level + " / " + this.maxLevels, this.fontSmall);//czas w ca³ej grze, wyœwietlanie, okreœlenie pozycji
		this.totalTimeText = this.game.add.text(120, 30, "Ogolny czas: " + this.totalTimer, this.fontSmall);// aktualizowany co sekundê 
		// dzurka do której musi wpaœæ pi³ka aby przejœæ poziom 
		this.hole = this.add.sprite(Ball._WIDTH * 0.5, 90, 'hole'); // dodajemy do³ek 
		this.physics.enable(this.hole, Phaser.Physics.ARCADE);// w³¹czenie silnika Physics.ARCADE do³ek ma siê nie ruszaæ przy wpdaniu pi³ki 
		this.hole.anchor.set(0.5); // zakotwiczenie do³ka 
		this.hole.body.setSize(2, 2); // roziar do³ka 

		// pi³ka
		this.ball = this.add.sprite(this.ballStartPos.x, this.ballStartPos.y, 'ball'); // dodajemy sprite czyli nasz¹ kulkê w danym miejscu na ekranie 
		this.ball.anchor.set(0.5); // kotwica wszelkich obliczeñ fizycznych na œrodku pi³ki 
		this.physics.enable(this.ball, Phaser.Physics.ARCADE); // w³¹czenie silnika Physics.ARCADE (obs³uguje ca³¹ fizykê ruchu pi³ki) 
		this.ball.body.setSize(18, 18); // rozmiar pi³ki 
		this.ball.body.bounce.set(0.3, 0.3); // natrafienie na przeszkodê 

		this.initLevels();
		this.showLevel(1);
		this.keys = this.game.input.keyboard.createCursorKeys(); // funkcja która da nam obiekt z obs³ug¹ zdarzeñ dla czterech klawiszy strza³ek do zabawy: w górê, w dó³, w lewo i w prawo

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
		this.levelData = [ // budowa labiryntu blokowego , tablica danych poziumu dla karzdego bloku w pikselach mam pozycjê oraz typ bloku poziomy lub pionowy 
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
			var newLevel = this.add.group(); // tworzenie nowej grupy elementów
			newLevel.enableBody = true;
			newLevel.physicsBodyType = Phaser.Physics.ARCADE;// ustawienie typu, umo¿liwa obliczenia fizyczne
			for (var e = 0; e < this.levelData[i].length; e++) {
				var item = this.levelData[i][e];
				newLevel.create(item.x, item.y, 'element-' + item.t);// metoda tworzy nowe pozycje w grupie
			}
			newLevel.setAll('body.immovable', true);// nie trzeba przegl¹daæ wszystkich elementó listy by dodaæ w³aœciowœci dla karzdego z nich
			newLevel.visible = false;
			this.levels.push(newLevel);
		}
	},
	showLevel: function (level) {//informacje dotycz¹ce poziomu wyœwietlone na ekranie 
		var lvl = level | this.level; //     za³adowanie poszczególnych poziomów które s¹ przechowywane w this.levels domyœlnie nie widoczna pokazujemy tylko bierz¹cy poziom 
		if (this.levels[lvl - 2]) {
			this.levels[lvl - 2].visible = false;
		}
		this.levels[lvl - 1].visible = true;
	},
	updateCounter: function () {  // aktualizuje czas spêdzony na grze na ka¿dym poziomie i rejestruje ca³kowity czas spêdzony na grze
		this.timer++;
		this.timerText.setText("Czas: " + this.timer);
		this.totalTimeText.setText("Ogolny czas: " + (this.totalTimer + this.timer));
	},
	managePause: function () { },// zatrzymuje i wznawia grê.
	manageAudio: function () { },// w³¹cza i wy³¹cza dŸwiêk.
	update: function () { // akualizacja wykonywana w ka¿dej klatce np. pozycja pi³ki
		if (this.keys.left.isDown) { // poruszanie siê 
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
		// okreœlenie koliduj¹cych obiektów 
		this.physics.arcade.collide(this.ball, this.borderGroup, this.wallCollision, null, this);
		this.physics.arcade.collide(this.ball, this.levels[this.level - 1], this.wallCollision, null, this);
		this.physics.arcade.overlap(this.ball, this.hole, this.finishLevel, null, this);// pi³ka nie zderza siê z do³kiem tylko nachodzi na siebie overlap, wywo³uje finishLevel
	},
	wallCollision: function () { },// jest wykonywany, gdy pi³ka uderzy w œciany lub inne przedmioty
	handleOrientation: function (e) { },// oriêtacja urz¹dzenia mobilnego, ruch pi³ki w zale¿noœci od wychylenia inna prêdkoœæ 

	// ³aduje nowy poziom, gdy bie¿¹cy poziom jest zakoñczony, lub koñczy grê, jeœli ostatni poziom jest ukoñczony
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