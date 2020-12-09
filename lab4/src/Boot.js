var Ball = { // deglarujemy Ball i nadejmy wysoko�� i szeroko�� w grze u�atwi to pozycjonowanie 
    _WIDTH: 320,
    _HEIGHT: 480
};
Ball.Boot = function (game) {};
Ball.Boot.prototype = {
    preload: function () { // �adowanie dw�ch obraz�w zostan� p�niej u�yte w Preload
        this.load.image('preloaderBg', 'img/loading-bg.png'); 
        this.load.image('preloaderBar', 'img/loading-bar.png');
    },
    create: function () { //kilka funkcji skalowania i wr�wnywania na ko�cu przej�cie do Preload
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.state.start('Preloader');
    }
};