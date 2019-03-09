const { PROD } = require("./18.js");

test("should return correct results", () => {
  expect(PROD(-5.6, 8.5, 6.7)).toBe(22.14);
  expect(PROD(-9.5, 8.7, 1.3)).toBe(79.92);
});
