var VampDancer = function() {
    makeDancer.call(this, ...arguments);
    this.$node.addClass("vamp");
};

VampDancer.prototype = Object.create(makeDancer.prototype);
VampDancer.prototype.constructor = VampDancer;

VampDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.show().animate({ marginTop: "80px" }, 1500 ).animate({ marginTop: "40px" }, 800 );
}