
StarWars = (function() {
  
  /* 
   * Constructor
   */
  function StarWars(args) {
    
    // Context wrapper
    this.el = $(args.el);
    
    // Audio to play the opening crawl
    this.audio = this.el.find('audio').get(0);
    
    // Start the animation
    this.start = this.el.find('.start');
    
        // ending of the animation
    this.ending = this.el.find('.ending');
    
    // The animation wrapper
    this.animation = this.el.find('.animation');
    
    // Remove animation and shows the start screen
    this.reset();

    // Start the animation on click
    
    this.start.bind('click', $.proxy(function() {
      //this.ending.show()//bubba commenta questo
      this.start.hide();
      //bubba commenta le 2 linee seguenti per arrivare alla fine 
      this.audio.play();
     this.el.append(this.animation);
    }, this));
    
    // Reset the animation and shows the start screen
    $(this.audio).bind('ended', $.proxy(function() {
      this.audio.currentTime = 0;
      this.end();
    }, this));
  }
  
  /*
   * Resets the animation and shows the start screen.
   */
  StarWars.prototype.reset = function() {
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
  };
  StarWars.prototype.end = function() {
    this.cloned = this.animation.clone(true);
    this.animation.remove();
    this.animation = this.cloned;
    this.ending.show()
  };

  return StarWars;
})();

new StarWars({
  el : '.starwars'
});


//the background
//Get context and screen size;
var ctx = cnv.getContext("2d");
var W = window.innerWidth;
var H = window.innerHeight;

//Set Canvas and Background Color;
cnv.width = W;
cnv.height = H;
ctx.fillStyle = "#112";
ctx.fillRect(0, 0, W, H);

//Glow effect;
ctx.shadowBlur = 10;
ctx.shadowColor = "white";

function animate() {
  //Random position and size of stars;
  let x = W * Math.random();
  let y = H * Math.random();
  let r = 2.5 * Math.random();

  //Draw the stars;
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();

  //Using setTimeout instead of window.requestAnimationFrame for slower speed... window.requestAnimationFrame is approximately equal to setTimeout(func, 17);
  setTimeout(animate, 100);
}
animate();
