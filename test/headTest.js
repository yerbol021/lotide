// const head = require('../head');
// const assertEqual = require('../assertEqual');

// // TEST CODE
// assertEqual(head([4, 5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 4 for [4, 5, 6, 7]", () => {
    assert.strictEqual(head([4, 5, 6, 7]), 4);
  });
  it('returns "Hello" for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});

