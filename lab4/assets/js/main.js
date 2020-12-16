


(function () {
    var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'game'); //inicjuje instancj� Phaser argumenty szeroko�� wysoko��, metoda jak� urzywa CANAVAS
    game.state.add('Boot', Ball.Boot);
    game.state.add('Preloader', Ball.Preloader);
    game.state.add('MainMenu', Ball.MainMenu);
    game.state.add('Howto', Ball.Howto);
    game.state.add('Game', Ball.Game);
    game.state.start('Boot');
})();
