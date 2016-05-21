/*global Phaser*/

var TopDownGame = TopDownGame || {};

TopDownGame.Game = function(){};

TopDownGame.Game.prototype = {
    create: function(){
        var map;
        var layer;
        var p;
        var cursors;
        land = this.add.tileSprite(0,0,800,600,"tile")
        land.fixedToCamera = true;
        
        player = this.add.sprite(0,0,'player', 'player1');
        player.anchor.setTo(0.5, 0.5);
        player.animations.add('move')
        //map = this.add.tilemap('tilemap0')
        //map.addTilesetImage('images','tile')
        this.game.cursors = this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.globals = this;
    },
}