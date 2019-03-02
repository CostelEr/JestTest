const L = require("./4");

test("should return correct result", () => {
  expect(L(9.0)).toBe(28.26);
  expect(L(1.0)).toBe(3.14);
  expect(L(3.0)).toBe(9.42);
});
