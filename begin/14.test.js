const { R, S } = require("./14.js");

test("should return correct results", () => {
  expect(R(9.9)).toBe(1.58);
  expect(S(9.9)).toBe(7.8);

  expect(R(5.04)).toBe(0.8);
  expect(S(5.04)).toBe(2.02);
});
