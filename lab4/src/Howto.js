// Howto pokazuje instrukcje jak gra�
Ball.Howto = function (game) {
};
Ball.Howto.prototype = {
    create: function () {
        this.buttonContinue = this.add.button(0, 0, 'screen-howtoplay', this.startGame, this); // pozycja plik graficzny 
    },
    startGame: function () { // po klikni�ciu w ekran uruchamia si� gra 
        this.game.state.start('Game');
    }
};