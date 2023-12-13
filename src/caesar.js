// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    // returns FALSE if shift value is equal to 0, less than -25, greater than 25, or not present
        if ((!shift) || (shift === 0) || (shift < -25) || (shift > 25)) {
          return false;
        }
        let result = "";
    // when decoding, shift in the opposite direction
          if (!encode) {
            shift = -shift;
          }
        for (let property of input) {
    // ignores capital letters
          let lowerCase = property.toLowerCase();
          let number = lowerCase.charCodeAt();
    // handles shifts that go past the end of the alphabet
          if (number >= 97 && number <= 122) {
            let addShift = (number + shift);
            if (addShift >= 97 && addShift <= 122) {
              let string = String.fromCharCode(addShift);
              result += string;
            }
            else if (addShift < 97) {
            addShift = (addShift - 96 + 122);
            let string = String.fromCharCode(addShift);
            result += string;
          }
            else if (addShift > 122) {
            addShift = (addShift - 122 + 96);
            let string = String.fromCharCode(addShift);
            result += string;
          }
          } else {
    // maintains spaces and other nonalphabetic symbols in the message before/after encoding/decoding
            result += property;
          };
        };
        return result;
    }
    
      return {
        caesar,
      };
    })();    

module.exports = { caesar: caesarModule.caesar };
