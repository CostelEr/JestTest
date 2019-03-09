const { AC, BC, SUM } = require("./17.js");

test("should return correct results", () => {
  expect(AC(8.1, -6.4, 6.9)).toBe(1.2);
  expect(BC(8.1, -6.4, 6.9)).toBe(13.3);
  expect(SUM(8.1, -6.4, 6.9)).toBe(14.5);

  expect(AC(10, -7.1, -5.7)).toBe(15.7);
  expect(BC(10, -7.1, -5.7)).toBe(1.4);
  expect(SUM(10, -7.1, -5.7)).toBe(17.1);
});
