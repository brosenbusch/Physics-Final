var exports = module.exports = {};

//use this prototype to create the other functions
exports.distance1 = function(v,t){
    return v*t;
};
exports.distance2 = function(v,a,t){
    return ((a*t*t)+(v*t))/2;
};
exports.velocity1= function(d,t){
    return d/t;
};
exports.velocity2 = function(vi,a,t){
    return v+a*t;
};
exports.time = function(d,v){
    return d/v;
};
exports.acceleration= function(v,t){
    return v/t;
};
