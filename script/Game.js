/*global Phaser*/

var TopDownGame = TopDownGame || {};

TopDownGame.Game = function(){};

TopDownGame.Game.prototype = {
    create: function(){
        var map;
        var layer;
        var p;
        var cursors;
        land = this.add.tileSprite(0,0,1000,2000,"tile")
        land.fixedToCamera = true;
        
        this.player = this.add.sprite(250,250,'player', 'player1');
        this.player.anchor.setTo(0.5, 0.5);
        this.player.animations.add('move')
        
        
        
        //map = this.add.tilemap('tilemap0')
        //map.addTilesetImage('images','tile')
        this.game.cursors = this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.globals = this;
    },
    update: function(){
        this.x = 0
        this.y = 0
        
        this.player.velocity.y = 0;
        if(this.cursors.up.isDown){
            this.player.velocity.y = 10;
            
        };
        //if(this.cursors.down.)
        
    }
}