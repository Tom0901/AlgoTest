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
  test("passing a small str", () => {
    expect(f("1")).toBe("please pass a str of at least 3 digits");
  });
});

describe("pass cases", () => {
  test("basic string", () => {
    expect(f("123")).toStrictEqual(["321", "312", "231", "213", "132", "123"]);
  });
  test("uncleaned string", () => {
    expect(f("1D_h64")).toStrictEqual([
      "641",
      "614",
      "461",
      "416",
      "164",
      "146",
    ]);
  });
  test("inputs > 3", () => {
    expect(f("1234")).toStrictEqual([
      "4321",
      "4312",
      "4231",
      "4213",
      "4132",
      "4123",
      "3421",
      "3412",
      "3241",
      "3214",
      "3142",
      "3124",
      "2431",
      "2413",
      "2341",
      "2314",
      "2143",
      "2134",
      "1432",
      "1423",
      "1342",
      "1324",
      "1243",
      "1234",
    ]);
  });
});
