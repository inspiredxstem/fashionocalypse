/*global Phaser*/

var TopDownGame = TopDownGame || {};

TopDownGame.Game = function(){};

TopDownGame.Game.prototype = {
    create: function(){
        var map;
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
        
        //enemy1
        this.enemy= this.add.sprite(300,300, 'enemy', 'player');
        this.enemy.health = 5;
        this.enemy.x = 0;
        this.enemy.y = 0;
        this.physics.enable(this.enemy, Phaser.Physics.ARCADE);
        //enemy movement
        this.enemy.body.velocity.x = -2.5;
        this.enemy.name = "enemy";
        
        //enemy2
        this.enemy2= this.add.sprite(300,300, 'enemy2', 'player2');
        this.enemy2.health = 5;
        this.enemy2.x = 0;
        this.enemy2.y = 100;
        this.physics.enable(this.enemy2, Phaser.Physics.ARCADE);
        //enemy movemen2
        this.enemy2.body.velocity.x = 200.5;
        this.enemy2.name = "enemy2";
        
        this.player.name = "player";
        
        
        this.dress1 = this.add.sprite(50,50, 'purple-dress');
        this.dress1.anchor.setTo(-4.70,1.25);
        this.dress2 = this.add.sprite(50,50, 'blue-dress');
        this.dress2.anchor.setTo(-3.60,-6.60);
        this.dress3 = this.add.sprite(50,50, 'pink-dress');
        this.dress3.anchor.setTo(-7.90,-3.90);
        this.dress4 = this.add.sprite(50,50, 'glasses');
        this.dress4.anchor.setTo(-6.10,-8.10);
        
        this.dress1.name = "purple-dress";
        this.dress2.name ="blue-dress";
        this.dress3.name = "pink-dress";
        this.dress4.name = "glasses";

        
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
        //console.log(this.enemy.body.x, this.enemy.body.y);
        if (this.enemy.body.x > 600){
            this.enemy.body.velocity.x = 2.5;
        }
        if (this.enemy.body.x < 0){
            this.enemy.body.velocity.x = -2.5;
        }
        //console.log(this.enemy2.body.x);
         if (this.enemy2.body.x > 600){
            this.enemy2.body.velocity.x = -200.5;
        }
        if (this.enemy2.body.x < 0){
            this.enemy2.body.velocity.x = 200.5;
        }
        
         
        if(this.cursors.up.isDown){
            this.y+=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'up'
        }
        else if(this.cursors.down.isDown){
            this.y-=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'down'
        }
        else if(this.cursors.left.isDown){
            this.x+=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'left'
        }
        else if(this.cursors.right.isDown){
            this.x-=0.1;
            this.player.anchor.setTo(this.x, this.y);
            this.player.direction = 'right'
        }
        //if(this.)
        this.enemy.anchor.setTo(this.enemy.x , this.enemy.y);
        this.game.physics.arcade.collide(this.player, this.dress1, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress2, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress3, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.dress4, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.enemy, collisionHandler, null, this);
        this.game.physics.arcade.collide(this.player, this.enemy2, collisionHandler, null, this);

        
        function collisionHandler (obj1, obj2) {

            //game.stage.backgroundColor = '#992d2d';
            console.log("collision!");
            
            console.log(obj2.name);
            //$('#dress1').html("<img src='assets/images/purple-dress.png'></img>");
            if(obj2.name == "purple-dress"){
                $('#dress1').append("<img src='assets/images/purple-dress.png'></img>");
                obj2.destroy();
            } else if (obj2.name == "pink-dress"){
                $('#dress1').append("<img src='assets/images/pink-dress.png'></img>");
                obj2.destroy();
            } else if (obj2.name == "blue-dress"){
                $('#dress1').append("<img src='assets/images/blue-dress.png'></img>");
                obj2.destroy();
            } else if (obj2.name == "glasses"){
                $('#dress1').append("<img src='assets/images/glasses.png'></img>");
                obj2.destroy();
            }
            console.log(obj2.name);
            if (obj2.name == "enemy" || obj2.name == "enemy2"){
                //alert('lost');
                onHit();
            }
            gameWon();

        }
  function onHit(){
     $('.heart')[0].remove()
      if($('.heart').length == 0){
          window.location.href = "gameover.html"   
        
    }
  }
    function gameWon(){
        if($('#dress1 img').length == 4){
            window.location.href = "gamewin.html"
        }
    }
  }
 };