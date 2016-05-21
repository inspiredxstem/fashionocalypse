/*global Phaser*/

var TopDownGame = TopDownGame || {};

TopDownGame.Game = function(){};

TopDownGame.Game.prototype = {
    create: function(){
        var map;
        var layer;
        var p;
        var cursors;
        var dress1;
        var dress2;
        var dress3;
        var dress4;
        
        land = this.add.tileSprite(0,0,1000,2000,"tile")
        land.fixedToCamera = true;
        
        this.x = 0
        this.y = 0
        this.player = this.add.sprite(250,250,'player', 'enemy');
        this.player.anchor.setTo(0, 0);
        this.player.animations.add('move');
        
        this.enemy= this.add.sprite(300,300, 'enemy', 'player');
        this.enemy.health = 5;
        this.enemy.x = 0;
        this.enemy.y = 0;
        
        
        this.dress1 = this.add.sprite(50,50, 'dress');
        this.dress1.anchor.setTo(-4.70,1.25);
        this.dress2 = this.add.sprite(50,50, 'dress');
        this.dress2.anchor.setTo(-3.60,-6.60);
        this.dress3 = this.add.sprite(50,50, 'dress');
        this.dress3.anchor.setTo(-7.90,-3.90);
        this.dress4 = this.add.sprite(50,50, 'dress');
        this.dress4.anchor.setTo(-6.10,-8.10);
        
        //map = this.add.tilemap('tilemap0')
        //map.addTilesetImage('images','tile')
        this.game.cursors = this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.globals = this;
    },
    update: function(){
        
        
        if(this.cursors.up.isDown){
            this.y+=0.1;
            this.enemy.y-=0.1;
            this.player.anchor.setTo(this.x, this.y);
        }
        else if(this.cursors.down.isDown){
            this.y-=0.1;
            this.enemy.y+=0.1;

            this.player.anchor.setTo(this.x, this.y);
        }
        else if(this.cursors.left.isDown){
            this.x+=0.1;
            this.player.anchor.setTo(this.x, this.y);
        }
        else if(this.cursors.right.isDown){
            this.x-=0.1;
            this.player.anchor.setTo(this.x, this.y);
        }
        //if(this.)
        this.enemy.anchor.setTo(this.enemy.x , this.enemy.y);
        
    }
    
    
};