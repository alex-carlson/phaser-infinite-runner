var SideScroller = SideScroller || {};

//loading the game assets
SideScroller.Preload = function(){};

SideScroller.Preload.prototype = {
  preload: function() {
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);
    this.cursors = this.game.input.activePointer;

    //load game assets
    this.load.image('player', 'assets/images/alex_Run.gif');
    this.load.image('playerDuck', 'assets/images/alex_Jump.gif');
    this.load.image('playerDead', 'assets/images/player_dead.png');
    this.load.image('goldCoin', 'assets/images/pizza.png');
    this.load.image('floor', 'assets/images/grass.png');
    this.load.image('sand', 'assets/images/sand.gif');
    this.load.audio('coin', 'assets/audio/coin.wav');
  },
  update: function(){
    if(this.cursors.isDown){
      this.state.start('Game');
    }
  }
};
