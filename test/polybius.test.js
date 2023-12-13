const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  describe("encoding", () => {
    it("should encode a message", () => {
      const input = "thinkful";
      const actual = polybius(input, encode = true);
      const expected = "4432423352125413"
      expect(actual).to.be.a("string");
      expect(actual).to.equal(expected);
    });
    it("should translate the letters i and j to 42", () => {
      const input = "jujitsu";
      const actual = polybius(input, encode = true);
      const expected = "42544242443454";
      expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
      const input = "Hello";
      const actual = polybius(input, encode = true);
      const expected = "3251131343";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before/after", () => {
      const input = "hello world";
      const actual = polybius(input, encode = true);
      const expected = "3251131343 2543241341";
      expect(actual).to.equal(expected);
    });
    it("advanced test: should translate the letters i and j to 42 AND ignore capital letters AND maintain spaces in the message before/after", () => {
      const input = "Hello jujitsu";
      const actual = polybius(input, encode = true);
      const expected = "3251131343 42544242443454";
      expect(actual).to.equal(expected);
    });
    it("grading test", () => {
      const input = "message"
      const actual = polybius(input, encode = true);
      const expected = "23513434112251";
      expect(actual).to.equal(expected);
    });
});
  describe("decoding", () => {
    it("should decode a message", () => {
      const input = "3251131343";
      const actual = polybius(input, encode = false);
      const expected = "hello";
      expect(actual).to.equal(expected);
    });
    it("should translate 42 to (i/j)", () => {
      const input = "4432423352125413";
      const actual = polybius(input, encode = false);
      const expected = "th(i/j)nkful";
      expect(actual).to.equal(expected);
    });
    it("should maintain spaces in the message before/after", () => {
      const input = "3251131343 2543241341";
      const actual = polybius(input, encode = false);
      const expected = "hello world";
      expect(actual).to.equal(expected);
    });
    it("should return false if the number of characters in the string (excluding spaces) is not even", () => {
      const input = "44324233521254134";
      const actual = polybius(input, encode = false);
      const expected = false;
      expect(actual).to.equal(expected);
    });
    it("advanced test: should translate 42 to (i/j) AND maintain spaces in the message before/after", () => {
      const input = "3251131343 4432423352125413";
      const actual = polybius(input, encode = false);
      const expected = "hello th(i/j)nkful";
      expect(actual).to.equal(expected);
    });
  });
});