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
    this.load.image('purple-dress', 'assets/images/purple-dress.png');
    this.load.image('blue-dress', 'assets/images/blue-dress.png');
    this.load.image('pink-dress', 'assets/images/pink-dress.png');
    this.load.image('glasses', 'assets/images/glasses.png');
    this.load.image('enemy', 'assets/images/mud-monster.png');
    this.load.image('enemy2', 'assets/images/mud-monster.png');
    this.load.image('enemy3', 'assets/images/mud-monster.png');
    this.load.image('circle', 'assets/images/circle.png');
    this.load.tilemap('tilemap0','assets/TileMaps/tilemap0.json', null, Phaser.Tilemap.TILED_JSON);
    },
    create: function(){
        this.state.start('Game')
    }
};