const { Distance } = require("./16.js");

test("should return correct results", () => {
  expect(Distance(7.7, -6)).toBe(13.7);
  expect(Distance(8.3, 9.9)).toBe(1.6);
  expect(Distance(10.7, -8.4)).toBe(19.1);
});
