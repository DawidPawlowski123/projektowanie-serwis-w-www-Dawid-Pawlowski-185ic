var Ball = { // deglarujemy Ball i nadejmy wysokoœæ i szerokoœæ w grze u³atwi to pozycjonowanie 
    _WIDTH: 320,
    _HEIGHT: 480
};
Ball.Boot = function (game) {};
Ball.Boot.prototype = {
    preload: function () { // ³adowanie dwóch obrazów zostan¹ póŸniej u¿yte w Preload
        this.load.image('preloaderBg', 'img/loading-bg.png'); 
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function () { //kilka funkcji skalowania i wrównywania na koñcu przejœcie do Preload
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};