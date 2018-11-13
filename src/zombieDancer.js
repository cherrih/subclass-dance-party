var ZombieDancer = function() {
    
    makeDancer.call(this, ...arguments);
    this.$node.addClass("zombie");
    
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