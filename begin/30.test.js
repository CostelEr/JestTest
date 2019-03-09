const { Degrees } = require("./30.js");

test("should return correct results", () => {
  expect(Degrees(2.12)).toEqual(121.53);
  expect(Degrees(5.81)).toEqual(333.06);
});
