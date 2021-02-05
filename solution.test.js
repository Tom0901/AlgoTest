const { expect } = require("@jest/globals");
const f = require("./solution");

describe("fail cases", () => {
  test("passing a bool", () => {
    expect(f(true)).toBe("please pass me a str");
  });
  test("passing a number", () => {
    expect(f(1)).toBe("please pass me a str");
  });
  test("passing an undefined", () => {
    expect(f(undefined)).toBe("please pass me a str");
  });
  test("passing an null", () => {
    expect(f(null)).toBe("please pass me a str");
  });
  test("passing an function", () => {
    expect(
      f(function hello() {
        return "hello";
      })
    ).toBe("please pass me a str");
  });
  test("passing an object", () => {
    expect(f({ true: true })).toBe("please pass me a str");
  });
  test("passing an array", () => {
    expect(f([1, 2, 3])).toBe("please pass me a str");
  });
});

describe("pass cases", () => {
  test("basic string", () => {
    expect(f("123")).toBe(["123", "132", "213", "231", "321", "312"]);
  });
  test("uncleaned string", () => {
    expect(f("1D_h64")).toBe(["164", "146", "641", "614", "416", "461"]);
  });
});
