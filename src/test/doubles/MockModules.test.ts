jest.mock("../../app/doubles/OtherUtlis", () => ({
    ...jest.requireActual("../../app/doubles/OtherUtlis"),
    calculateComplexity: () => 10
}));

jest.mock("uuid", () => ({
    v4: () => "123"
}))

import * as OtherUtils from "../../app/doubles/OtherUtlis";

describe("module tests", () => {
  test("calculate complexity", () => {
    const result = OtherUtils.calculateComplexity({} as any);
    expect(result).toBe(10);
  });

  test("keep other functions", () => {
    const result = OtherUtils.toUpperCase("abc");
    expect(result).toBe("ABC");
  });

  test("string with id", () => {
    const result = OtherUtils.toLowerCaseWithId("ABC");
    expect(result).toBe("abc123");
  });


});
