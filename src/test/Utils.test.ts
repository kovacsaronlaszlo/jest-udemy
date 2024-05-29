import { StringUtils, getStringInfo, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests", () => {
    let sut: StringUtils;

    // beforAll and afterAll are used in integration test

    beforeEach(() => {
      sut = new StringUtils();
    });

    afterEach(() => {
      //clearing mocks!
    });

    it("should return correct uppercase", () => {
      const actual = sut.toUppercase("abc");

      expect(actual).toBe("ABC");
    });

    it("should throw error on invlaid argument - function", () => {
      function expectError() {
        const actual = sut.toUppercase("");
      }

      expect(expectError).toThrow();
      expect(expectError).toThrowError("Invalid argument!");
    });

    it("should throw error on invlaid argument - arrow function", () => {
      expect(() => {
        sut.toUppercase("");
      }).toThrowError("Invalid argument!");
    });

    it("should throw error on invlaid argument - try catch block", (done) => {
      try {
        sut.toUppercase("");
        done("GetStringInfo should throw error for valid arg!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Invalid argument!");
        done();
      }
    });
  });

  it("should return Uppercase", () => {
    const sut = toUpperCase;
    const expected = "ABC";

    const actual = sut("abc");

    expect(actual).toBe(expected);
  });

  describe("touppercase exmaple", () => {
    it.each([
      {
        input: "abc",
        expected: "ABC",
      },
      {
        input: "My-string",
        expected: "MY-STRING",
      },
      {
        input: "def",
        expected: "DEF",
      },
    ])("$input to uppercase should be $expected", ({ input, expected }) => {
      const actual = toUpperCase(input);

      expect(actual).toBe(expected);
    });
  });

  describe("getStringinfo for arg My-String should", () => {
    test("return right lenght", () => {
      const actual = getStringInfo("My-String");

      expect(actual.characters).toHaveLength(9);
    });

    test("return right lowercase", () => {
      const actual = getStringInfo("My-String");

      expect(actual.lowerCase).toBe("my-string");
    });

    test("return right uppercase", () => {
      const actual = getStringInfo("My-String");

      expect(actual.upperCase).toBe("MY-STRING");
    });

    test("return right characters", () => {
      const actual = getStringInfo("My-String");

      expect(actual.characters).toEqual([
        "M",
        "y",
        "-",
        "S",
        "t",
        "r",
        "i",
        "n",
        "g",
      ]);
    });

    test("return defined extra info", () => {
      const actual = getStringInfo("My-String");

      expect(actual.extraInfo).toBeDefined();
    });

    test("return right extra info", () => {
      const actual = getStringInfo("My-String");

      expect(actual.extraInfo).toEqual({});
    });
  });
});
