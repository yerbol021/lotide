// Define assertEqual function
// const assertEqual = function (actual, expected) {
//   if (actual !== expected) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     return;
//   }
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
// };

// const assertEqual = require ('../assertEqual')

const eqArrays = function (arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// // Test
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS

module.exports = eqArrays;