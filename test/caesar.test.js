const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar", () => {
  describe("input shift errors", () => {
    it("should return false if the shift value is equal to 0", () => {
      const input = "thinkful";
      const shift = 0;
      const actual = caesar(input, shift, encode = true);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is less than -25", () => {
      const input = "thinkful";
      const shift = -26;
      const actual = caesar(input, shift, encode = true);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is greater than 25", () => {
      const input = "thinkful";
      const shift = 99;
      const actual = caesar(input, shift, encode = true);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("should return false if the shift value is not present", () => {
      const input = "thinkful";
      const shift = null;
      const actual = caesar(input, shift, encode = true);
      const expected = false;
      expect(actual).to.equal(expected);
    });
  });
  describe("encoding", () => {
    it("should encode a message", () => {
        const input = "thinkful";
        const shift = 3;
        const actual = caesar(input, shift, encode = true);
        const expected = "wklqnixo";
        expect(actual).to.be.a("string");
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const input = "Thinkful";
        const shift = 3;
        const actual = caesar(input, shift, encode = true);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const input = "thisisasecretmessage";
      const shift = 8;
      const actual = caesar(input, shift, encode = true);
      const expected = "bpqaqaiamkzmbumaaiom";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols throughout", () => {
        const input = "t h i n k f u l !";
        const shift = 3;
        const actual = caesar(input, shift, encode = true);
        const expected = "w k l q n i x o !";
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift", () => {
        const input = "thinkful";
        const shift = -3;
        const actual = caesar(input, shift, encode = true);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });
    it("advanced test: should ignore capital letters AND maintain spaces and nonalphabetic symbols throughout AND handle shifts that go past the end of the alphabet", () => {
      const input = "This is a secret message!"
      const shift = 8;
      const actual = caesar(input, shift, encode = true);
      const expected = "bpqa qa i amkzmb umaaiom!";
      expect(actual).to.equal(expected);
    });
    it("grading test", () => {
      const input = "Zebra Magazine";
      const shift = 3;
      const actual = caesar(input, shift, encode = true);
      const expected = "cheud pdjdclqh";
      expect(actual).to.equal(expected);
    });
});
  describe("decoding", () => {
    it("should decode a message", () => {
        const input = "wklqnixo";
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = "thinkful";
        expect(actual).to.be.a("string");
        expect(actual).to.equal(expected);
    });
    it("ignores capital letters", () => {
        const input = "Wklqnixo";
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
    it("should handle shifts that go past the end of the alphabet", () => {
      const input = "bpqaqaiamkzmbumaaiom";
      const shift = 8;
      const actual = caesar(input, shift, encode = false);
      const expected = "thisisasecretmessage";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces and nonalphabetic symbols throughout", () => {
        const input = "w k l q n i x o !";
        const shift = 3;
        const actual = caesar(input, shift, encode = false);
        const expected = "t h i n k f u l !";
        expect(actual).to.equal(expected);
    });
    it("should allow for a negative shift", () => {
        const input = "wklqnixo";
        const shift = -2;
        const actual = caesar(input, shift, encode = false);
        const expected = "ymnspkzq";
        expect(actual).to.equal(expected);
    });
    it("advanced test: should ignore capital letters AND maintain spaces and nonalphabetic symbols throughout AND handle shifts that go past the end of the alphabet", () => {
      const input = "BPQA qa I amkzmb umaaiom!"
      const shift = 8;
      const actual = caesar(input, shift, encode = false);
      const expected = "this is a secret message!";
      expect(actual).to.equal(expected);
    });
});
});