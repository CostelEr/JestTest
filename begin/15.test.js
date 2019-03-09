const { D, L } = require("./15.js");

test("should return correct results", () => {
  expect(D(13.14)).toBe(4.09);
  expect(L(13.14)).toBe(12.85);

  expect(D(7.38)).toBe(3.07);
  expect(L(7.38)).toBe(9.63);
});
