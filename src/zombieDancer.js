var ZombieDancer = function() {
    
    makeDancer.call(this, ...arguments);
    this.$node.addClass("zombie");
    this.$node.append('<img src="https://purepng.com/public/uploads/large/purepng.com-zombiezombiezombizonbihuman-corpsezombieshorrormental-diseasesviruses-1701527832858rdav1.png">');
};

ZombieDancer.prototype = Object.create(makeDancer.prototype);
ZombieDancer.prototype.constructor = ZombieDancer;

ZombieDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    var pixels = Math.random() * 80;
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