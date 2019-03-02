const Average = require("./8");

test("should return correct results", () => {
  expect(Average(-6, -4)).toBe(-5);
  expect(Average(8, -9)).toBe(-0.5);
  expect(Average(1, -2)).toBe(-0.5);
});
