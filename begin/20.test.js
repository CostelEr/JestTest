const { Distance } = require("./20.js");

test("should return correct results", () => {
  expect(Distance(1.9, 9.4, 9.7, -2.3)).toBe(14.06);

  expect(Distance(2.2, 8.6, -7.4, 2.1)).toBe(11.59);
  expect(Distance(-6, 6.5, 4.9, -6.1)).toBe(16.66);
});
