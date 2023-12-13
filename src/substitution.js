// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const actualAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphaArray = [...actualAlphabet];

  function substitution(input, alphabet, encode = true) {
// returns false if alphabet parameter does not have exactly 26 characters
    if ((!alphabet) || (alphabet.length !== 26)) {
      return false;
    }
    let result = [];
// all characters in the alphabet parameter MUST be unique; otherwise return false
    let set = new Set([...alphabet]);
    if (set.size < 26) {
      return false
    }
    if (encode) {
// should ignore capital letters
      let lowerCase = input.toLowerCase();
      let inputArray = [...lowerCase];
      for (let letter of inputArray) {
// should maintain spaces throughout
        if (letter === " ") {
          result += letter;
        } else {
          let index = alphaArray.indexOf(letter);
          result += alphabet[index]
      }
    }
  } else if (!encode) {
    let inputArray = [...input];
    for (let letter of inputArray) {
// should maintain spaces throughout
      if (letter === " ") {
        result += letter;
      } else {
        let index = alphabet.indexOf(letter);
        result += alphaArray[index];
      }
    }
  }
  return result;
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
