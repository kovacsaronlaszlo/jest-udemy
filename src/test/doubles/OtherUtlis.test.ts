import {
  OtherStringUtils,
  calculateComplexity,
  toUpperCaseWithCallback,
} from "../../app/doubles/OtherUtlis";

describe("OtherUtils test suite", () => {
  describe("OtherStingUtils test with spies", () => {
    let sut: OtherStringUtils;

    beforeEach(() => {
      sut = new OtherStringUtils();
    });

    test("Use a spy to track calls", () => {
      const toUpperCaseSpy = jest.spyOn(sut, "toUpperCase");
      sut.toUpperCase("asa");
      expect(toUpperCaseSpy).toBeCalledWith("asa");
    });

    test("Use a spy to track calls to other module", () => {
      const logSpy = jest.spyOn(sut, "logString");
      sut.logString("abc");
      expect(logSpy).toBeCalledWith("abc");
    });

    test("Use a spy to replace the implementation of a method", () => {
      jest.spyOn(sut, "callExternaelService").mockImplementation(() => {
        console.log("calling mock implementation");
      }); // to test private methods cast to any
      sut.callExternaelService();
    });
  });

  describe("Tracking callback with Jest mocks", () => {
    const callbackMock = jest.fn();

    afterEach(() => {
      jest.clearAllMocks();
    });

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCallback("", callbackMock);
      expect(actual).toBeUndefined();
      expect(callbackMock).toBeCalledWith("Invalid argument");
      expect(callbackMock).toBeCalledTimes(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCallback("abc", callbackMock);
      expect(actual).toBe("ABC");
      expect(callbackMock).toBeCalledWith("called function with abc");
      expect(callbackMock).toBeCalledTimes(1);
    });
  });

  describe("Tracking clabbacks", () => {
    let cbArg = [];
    let timesCalled = 0;

    function callbackMock(arg: string) {
      cbArg.push(arg);
      timesCalled++;
    }

    afterEach(() => {
      // clearing tracking fields
      cbArg = [];
      timesCalled = 0;
    });

    it("calls callback for invalid argument - track calls", () => {
      const actual = toUpperCaseWithCallback("", callbackMock);
      expect(actual).toBeUndefined();
      expect(cbArg).toContain("Invalid argument");
      expect(timesCalled).toBe(1);
    });

    it("calls callback for valid argument - track calls", () => {
      const actual = toUpperCaseWithCallback("abc", callbackMock);
      expect(actual).toBe("ABC");
      expect(cbArg).toContain("called function with abc");
      expect(timesCalled).toBe(1);
    });
  });

  it("to uppercase - call callback for invalid argument", () => {
    const actual = toUpperCaseWithCallback("", () => {}); // () => {} => this is the fake
    expect(actual).toBeUndefined();
  });

  it("to uppercase - call callback for valid argument", () => {
    const actual = toUpperCaseWithCallback("abc", () => {}); // () => {} => this is the fake
    expect(actual).toBe("ABC");
  });

  it("Calculates complexity", () => {
    const someInfo = {
      length: 5,
      extraInfo: {
        field1: "someInfo",
        field2: "someOtherInfo",
      },
    };

    const actual = calculateComplexity(someInfo as any);
    expect(actual).toBe(10);
  });
});
