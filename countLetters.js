const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const result = {};
  //  sentence = sentence.trim();
  for (const letter of sentence) {
    // console.log(letter);
    if (letter !== " ") {
      if (result[letter]) {
        result[letter] = result[letter] + 1;
      }
      else {
        result[letter] = 1;
      }
    }
  }
  return result;
}
const count = countLetters("lighthouse in the house");
console.log(count)