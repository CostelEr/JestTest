const perimeter = require("./1");

test("should return correct result", () => {
  expect(perimeter(2)).toBe(8);
  expect(perimeter(3)).toBe(12);
});
