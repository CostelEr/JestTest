const { SW } = require("./23.js");

test("should return correct results", () => {
  expect(SW([1.65, 3.05, 1.28])).toEqual([1.28, 1.65, 3.05]);
  expect(SW([4.76, 1.33, 4.84])).toEqual([4.84, 4.76, 1.33]);
});
