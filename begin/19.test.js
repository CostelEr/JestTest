const { P, S } = require("./19.js");

test("should return correct results", () => {
  expect(P(0.9, -4.9, -5, 7.9)).toBe(37.4);
  expect(S(0.9, -4.9, -5, 7.9)).toBe(75.52);

  expect(P(6.1, -8.1, -7, 1.2)).toBe(44.8);
  expect(S(6.1, -8.1, -7, 1.2)).toBe(121.83);
});
