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
        
        
        this.dress1 = this.add.sprite(50,50, 'purple-dress');
        this.dress1.anchor.setTo(-4.70,1.25);
        this.dress2 = this.add.sprite(50,50, 'blue-dress');
        this.dress2.anchor.setTo(-3.60,-6.60);
        this.dress3 = this.add.sprite(50,50, 'pink-dress');
        this.dress3.anchor.setTo(-7.90,-3.90);
        this.dress4 = this.add.sprite(50,50, 'pink-dress');
        this.dress4.anchor.setTo(-6.10,-8.10);
        
        this.dress1.name = "purple-dress";
        this.dress2.name ="blue-dress";
        this.dress3.name = "pink-dress";
        this.dress4.name = "pink-dress1";

        
        this.game.physics.enable(this.dress1, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.dress2, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.dress3, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.dress4, Phaser.Physics.ARCADE);
        this.game.physics.enable(this.player, Phaser.Physics.ARCADE);

        
        //map = this.add.tilemap('tilemap0')
        //map.addTilesetImage('images','tile')
        this.game.cursors = this.cursors = this.game.input.keyboard.createCursorKeys();
        this.game.globals = this;
    },
    update: function(){
        
         
         if(this.input.activePointer.isDown){
             fire(this)
         }
        if(this.cursors.up.isDown){
            this.y+=0.1;
            this.enemy.y-=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'up'
        }
        else if(this.cursors.down.isDown){
            this.y-=0.1;
            this.enemy.y+=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'down'
        }
        else if(this.cursors.left.isDown){
            this.x+=0.1;
            this.enemy.x-=0.1
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'left'
        }
        else if(this.cursors.right.isDown){
            this.x-=0.1;
            this.enemy.x+=0.1
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'right'
        }
        //if(this.)
        this.enemy.anchor.setTo(this.enemy.x , this.enemy.y);
        
        this.game.physics.arcade.collide(this.player, this.dress1, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress2, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress3, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress4, collisionHandler, null, this);
        

        if(this.bullet) {
            if(this.bullet.direction =="up"){
                this.bullet.x += 0
                this.bullet.y += 0.1
            }else if(this.bullet.direction =="down"){
                this.bullet.x+=0
                this.bullet.y-=0.1
            } else if(this.bullet.direction =="left"){
                this.bullet.x+=0.1
                this.bullet.y+=0
            } else if(this.bullet.direction =="right"){
                this.bullet.x-=0.1
                this.bullet.y+=0
            }

            this.bullet.anchor.setTo(this.bullet.x, this.bullet.y)
        }
        
        function collisionHandler (obj1, obj2) {

            //game.stage.backgroundColor = '#992d2d';
            console.log("collision!");
            obj2.destroy();
            console.log(obj2.name);
            //$('#dress1').html("<img src='assets/images/purple-dress.png'></img>");
            if(obj2.name == "purple-dress"){
                $('#dress1').append("<img src='assets/images/purple-dress.png'></img>"); 
            } else if (obj2.name == "pink-dress"){
                $('#dress1').append("<img src='assets/images/pink-dress.png'></img>"); 
            }

        }
      function fire(game){
          
          console.log(game)
          if(!game.bullet) {
              
          game.bullet = game.add.sprite(250,250,'circle')
          game.bullet.x = game.player.anchor.x;
          game.bullet.y= game.player.anchor.y;
          game.bullet.direction = game.player.direction
          game.bullet.anchor.setTo(game.bullet.x, game.bullet.y)
          }
      }
    }
 
    
};