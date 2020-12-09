// Howto pokazuje instrukcje jak graæ
Ball.Howto = function (game) {
};
Ball.Howto.prototype = {
    create: function () {
        this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this); // pozycja plik graficzny 
    },
    startGame: function () { // po klikniêciu w ekran uruchamia siê gra 
        this.game.state.start('Game');
    }
};