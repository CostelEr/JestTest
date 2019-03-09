const { Radian } = require("./29.js");

test("should return correct results", () => {
  expect(Radian(101.09)).toEqual(1.76);
  expect(Radian(310.93)).toEqual(5.42);
  expect(Radian(101.36)).toEqual(1.77);
});
