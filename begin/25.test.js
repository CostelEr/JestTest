const { Y } = require("./25.js");

test("should return correct results", () => {
  expect(Y(3.81)).toEqual(9082.28);
  expect(Y(2.51)).toEqual(705.38);
  expect(Y(1.85)).toEqual(92.73);
});
