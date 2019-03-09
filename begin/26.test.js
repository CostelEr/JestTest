const { Y } = require("./26.js");

test("should return correct results", () => {
  expect(Y(1.07)).toEqual(259.05);
  expect(Y(1.62)).toEqual(48.02);
  expect(Y(5.12)).toEqual(298.44);
});
