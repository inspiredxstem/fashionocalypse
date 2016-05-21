/*global Phaser*/
var TopDownGame = TopDownGame || {};

TopDownGame.Preload = function(){};
 
TopDownGame.Preload.prototype = {
    preload: function(){
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.load.setPreloadSprite(this.preloadBar);
    
    this.load.image('tile', 'assets/images/tiles.png');
    this.load.image('player', 'assets/images/player.png');
    this.load.image('dress', 'assets/images/purple-dress.png');
    this.load.image('enemy', 'assets/images/enemy.png');
    this.load.tilemap('tilemap0','assets/TileMaps/tilemap0.json', null, Phaser.Tilemap.TILED_JSON);
    },
    create: function(){
        this.state.start('Game')
    }
};