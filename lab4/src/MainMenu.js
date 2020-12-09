//  MainMenu menu z przyciskiem Start
Ball.MainMenu = function (game) { };
Ball.MainMenu.prototype = {
    create: function () {
        this.add.sprite(0, 0, 'screen-mainmenu');
        this.gameTitle = this.add.sprite(Ball._WIDTH * 0.5, 40, 'title');
        this.gameTitle.anchor.set(0.5, 0);
        this.startButton = this.add.button(Ball._WIDTH * 0.5, 200, 'button-start', this.startGame, this, 2, 0, 1); // Tworzenie przyciku okre�lenie pozycji
        this.startButton.anchor.set(0.5, 0); // utworzenie punktu zaczepienia na przycisku, w po�owie odleg�o�ci od lewej kraw�dzi i na pocz�tku g�rnej kraw�dzi
        this.startButton.input.useHandCursor = true;// klikni�cie przyciku 
    },
    startGame: function () {// po klikni�ciu przycisku przechodzimy do ekranu z instrukcj� gry 
        this.game.state.start('Howto'); 
    }
};