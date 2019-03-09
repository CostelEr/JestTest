const { SW } = require("./24.js");

test("should return correct results", () => {
  expect(SW([5.95, 8.53, 8.73])).toEqual([8.53, 8.73, 5.95]);
  expect(SW([7.62, 3.23, 2.35])).toEqual([3.23, 2.35, 7.62]);
});
