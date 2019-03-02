const GM = require("./9");

test("should return correct results", () => {
  expect(GM(7, 10)).toBe(8.37);
  expect(GM(6, 20)).toBe(10.95);
  expect(GM(17, 13)).toBe(14.87);
});
