const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
  describe("input errors", () => {
    it("should return false if the given alphabet isn't exactly 26 characters long", () => {
      const input = "thinkful";
      const alphabet = "short";
      const actual = substitution(input, alphabet);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if there are any duplicate characters in the given alphabet", () => {
      const input = "thinkful";
      const alphabet = "abcabcabcabcabcabcabcabcyz";
      const actual = substitution(input, alphabet);
      const expected = false;
      expect(actual).to.equal(expected);
    });
});
  describe("encoding", () => {
    it("should encode a phrase based on the alphabet given to the function", () => {
      const input = "thinkful";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, encode = true);
      const expected = 'jrufscpw'
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before/after", () => {
      const input = "you are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, encode = true);
      const expected = 'elp xhm xf mbymwwmfj dne'
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "Message"
      const alphabet = "$wae&zrdxtfcygvuhbijnokmpl";
      const actual = substitution(input, alphabet, encode = true);
      const expected = 'y&ii$r&'
      expect(actual).to.equal(expected);
    });
    it("advanced test: should maintain spaces in the message AND ignore capital letters", () => {
      const input = "You are an excellent spy";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, encode = true);
      const expected = 'elp xhm xf mbymwwmfj dne';
      expect(actual).to.equal(expected);
    });
    it("grading test", () => {
      const input = "message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(input, alphabet, encode = true);
      const expected = 'ykrrpik';
      expect(actual).to.equal(expected);
    })
  });
  describe("decoding", () => {
    it("should decode a phrase based on the alphabet given to the function", () => {
      const input = "jrufscpw";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, encode = false);
      const expected = 'thinkful';
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before/after", () => {
      const input = "elp xhm xf mbymwwmfj dne";
      const alphabet = "xoyqmcgrukswaflnthdjpzibev";
      const actual = substitution(input, alphabet, encode = false);
      const expected = 'you are an excellent spy';
      expect(actual).to.equal(expected);
    });
  });
});