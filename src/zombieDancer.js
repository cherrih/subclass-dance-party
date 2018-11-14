var ZombieDancer = function() {
    
    makeDancer.call(this, ...arguments);
    this.$node.addClass("zombie");
    this.$node.append('<img src="http://static.tumblr.com/89a78b26841ed6a7e169496da2c56b6a/zhonoig/KrVng21ti/tumblr_static_cjj4qne695w0goksos04c0ck4.gif">');
};

ZombieDancer.prototype = Object.create(makeDancer.prototype);
ZombieDancer.prototype.constructor = ZombieDancer;

ZombieDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    var pixels = Math.random() * 200;
    var speed = Math.floor(Math.random() * (2000 - 1000)) + 1000;
    this.$node.show().animate({ marginLeft: String(pixels) + "px" }, speed).animate({ marginLeft: String(pixels) + "px" }, speed)
    
    // .animate({marginLeft: ('+=' + String(pixels) + 'px')});
    
}

ZombieDancer.prototype.lineUp = function() {
  $('.zombie').css({
    'top': '700px'
    // 'flex-direction': 'column'
  });
}

// ZombieDancer.prototype.party = function() {
//   $('.zombie').css({
//     'top': '800px'
//     // 'flex-direction': 'column'
//   });
// }