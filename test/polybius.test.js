const { expect } = require("chai");
const polybiusTest = require("../src/polybius").polybius;

// For the Polybius square (example: polybius("message") => "23513434112251")
describe("Unit test for polybius()", () => {
  // It should encode decode the following (example: polybius("message") => "23513434112251")
  it("Should encode correctly", () => {
    const actual = polybiusTest("message");
    const expected = "23513434112251";
    expect(actual).to.eql(expected);
  });
  it("Should decode correctly", () => {
    const actual = polybiusTest("23513434112251", false);
    const expected = "message";
    expect(actual).to.eql(expected);
  });
  // When encoding, it translates the letters i and j to 42.
  it("Should translate i or j to 42", () => {
    const actual = polybiusTest("i");
    const expected = "42";
    expect(actual).to.eql(expected);
  });
  // When decoding, it translates 42 to (i/j).
  it("Should decode 42 as 'i/j'", () => {
    const actual = polybiusTest("42", false);
    const expected = "i/j";
    expect(actual).to.eql(expected);
  });
  // It ignores capital letters. (For example, the results of A Message and a message should be the same.)
  it("Should ignore capitalization.", () => {
    const actual = polybiusTest("MESSAGE");
    const expected = "23513434112251";
    expect(actual).to.eql(expected);
  });
  // It maintains spaces in the message, before and after encoding or decoding.
  it("Should keep spaces and special characters", () => {
    const actual = polybiusTest("mess age");
    const expected = "23513434 112251";
    expect(actual).to.eql(expected);
  });
  // When decoding, should return false if the stringlength is not even
  it("Should return false when the decoding number list is not even", () => {
    const actual = polybiusTest("235", false);
    expect(actual).to.be.false;
  });
});
