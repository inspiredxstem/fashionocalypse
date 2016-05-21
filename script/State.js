/*global Phaser*/
var TopDownGame = TopDownGame || {};

Phaser.Loader.crossOrigin = "anonymous";

TopDownGame.game = new Phaser.Game(720, 480, Phaser.AUTO, '');

TopDownGame.game.state.add('Boot', TopDownGame.Boot);
TopDownGame.game.state.add('Preload', TopDownGame.Preload);
TopDownGame.game.state.add('Game', TopDownGame.Game);
TopDownGame.game.state.add('Death', TopDownGame.Death);

TopDownGame.game.state.start('Boot');