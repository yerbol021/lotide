const assertEqual = require('./assertEqual');
// FUNCTION IMPLEMENTATION
const head = function(array) {
  return array[0]
}


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// // TEST CODE
// assertEqual(head([4,5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


module.exports = head;
