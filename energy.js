var exports = module.exports = {};

//use this prototype to create the other functions
exports.kineticEnergy = function(m,v){
    return (m*v*v)/2;
};
exports.mass = function(ke,v){
    return (2*ke)/(v*v);
};
exports.velocity = function(ke,m){
    return Math.sqrt((2*ke)/(m));
};
