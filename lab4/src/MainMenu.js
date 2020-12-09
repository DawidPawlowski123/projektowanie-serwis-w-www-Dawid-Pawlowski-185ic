//  MainMenu menu z przyciskiem Start
Ball.MainMenu = function (game) { };
Ball.MainMenu.prototype = {
    create: function () {
        this.add.sprite(0, 0, 'screen-mainmenu');
        this.gameTitle = this.add.sprite(Ball._WIDTH * 0.5, 40, 'title');
        this.gameTitle.anchor.set(0.5, 0);
        this.startButton = this.add.button(Ball._WIDTH * 0.5, 200, 'button-start', this.startGame, this, 2, 0, 1); // Tworzenie przyciku okreœlenie pozycji
        this.startButton.anchor.set(0.5, 0); // utworzenie punktu zaczepienia na przycisku, w po³owie odleg³oœci od lewej krawêdzi i na pocz¹tku górnej krawêdzi
        this.startButton.input.useHandCursor = true;// klikniêcie przyciku 
    },
    startGame: function () {// po klikniêciu przycisku przechodzimy do ekranu z instrukcj¹ gry 
        this.game.state.start('Howto'); 
    }
};