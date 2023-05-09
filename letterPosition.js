const letterPositions = function(sentence) {
  const results = {};
  
  for (const i in sentence) {
    const letter = sentence[i];

    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);

  }// logic to update results here
  return results;
};