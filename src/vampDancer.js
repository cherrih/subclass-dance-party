var VampDancer = function() {
    makeDancer.call(this, ...arguments);
    this.$node.addClass("vamp");
    this.$node.append('<img src="https://vignette.wikia.nocookie.net/falloutfanon/images/8/86/Greater_Vampire_Bat.png/revision/latest?cb=20160131192754">')
};

VampDancer.prototype = Object.create(makeDancer.prototype);
VampDancer.prototype.constructor = VampDancer;

VampDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.show().animate({ marginTop: "80px" }, 1500 ).animate({ marginTop: "40px" }, 800 );
}

VampDancer.prototype.lineUp = function() {
  $('.vamp').css({
    'top': '100px'
    // 'flex-direction': 'column'
  });
}

// VampDancer.prototype.party = function() {
//   $('.vamp').css({
//     'top': '800px'
//     // 'flex-direction': 'column'
//   });
// }