var TopDownGame = TopDownGame || {};

TopDownGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
TopDownGame.Boot.prototype = {
    preload: function() {
        // this is needed for the images to work on rawgit
        this.load.crossOrigin = "anonymous";
        //assets we'll use in the loading screen
        this.load.image('preloadbar', 'assets/images/preloader-bar.png');
  },
    create: function(){
        this.game.backgroundColor = '#ff0';
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.state.start('Preload');

    }
}