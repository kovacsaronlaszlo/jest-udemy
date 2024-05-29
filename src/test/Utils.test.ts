import { toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return Uppercase", () => {
    
    const sut = toUpperCase;
    const expected = "ABC";

    const actual = sut("abc");

    expect(actual).toBe(expected);
  });
});
