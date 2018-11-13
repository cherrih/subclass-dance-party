var BlinkyDancer = function() {
  makeDancer.call(this, ...arguments);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.$node.addClass("blinky");
  this.$node.append('<img src="https://mbtskoudsalg.com/images/eye-glow-png-5.png">');
};

BlinkyDancer.prototype = Object.create(makeDancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.fadeToggle();
};

BlinkyDancer.prototype.lineUp = function() {
  $('.blinky').css({
    'top': '400px'
    // 'flex-direction': 'column'
  });
}

// BlinkyDancer.prototype.shuffle = function() {
//   var top = $('body').height() * Math.random();
//   var left = $('body').width() * Math.random();
  
//   $('.blinky').css({
//     'top': top,
//     'left': left
//   });
// }
