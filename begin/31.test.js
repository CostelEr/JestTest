const { TC } = require("./31.js");

test("should return correct results", () => {
  expect(TC(66.76)).toEqual(19.31);
  expect(TC(112.6)).toEqual(44.78);
  expect(TC(32.19)).toEqual(0.11);
});
