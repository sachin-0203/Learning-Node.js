// Methode -> 1

// function add(a,b){
//   return a+b;
// }
// function sub(a,b){
//   return a-b;
// }

// module.exports = { add, sub};  // write only 1 time


// Methode -> 2

exports.add = (a,b) => a+b; // exports can write many times
exports.sub = (a,b) => a-b;