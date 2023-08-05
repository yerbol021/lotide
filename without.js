
function assertArraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`❌❌❌ Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
}

function without(source, itemsToRemove) {
  let result = source.filter(item => !itemsToRemove.includes(item));
  return result;
}

// Test cases
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
assertArraysEqual(without([1, "2", 3], [1, 2, "3"]), ["2", 3]);
assertArraysEqual(without([], [1]), []);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);

// Test to make sure the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
