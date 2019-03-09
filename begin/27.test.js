const { P } = require("./27.js");

test("should return correct results", () => {
  expect(P([1.54])).toEqual([2.37, 5.62, 31.63]);
  expect(P([1.13])).toEqual([1.28, 1.63, 2.66]);
});
