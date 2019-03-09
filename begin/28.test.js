const { P } = require("./28.js");

test("should return correct results", () => {
  expect(P([3.52])).toEqual([12.39, 43.61, 540.4, 292029.44, 157811973.97]);
  expect(P([1.17])).toEqual([1.37, 1.6, 2.19, 4.81, 10.54]);
});
