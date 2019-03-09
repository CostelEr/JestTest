const { Per, S } = require("./21.js");

test("should return correct results", () => {
  expect(Per(-0.9, -8.2, 3.1, 2.1, 7.9, -8.8)).toBe(31.78);
  expect(S(-0.9, -8.2, 3.1, 2.1, 7.9, -8.8)).toBe(46.52);

  expect(Per(-3.3, 9.6, -1.2, 3.4, 7.5, 4.8)).toBe(27.18);
  expect(S(-3.3, 9.6, -1.2, 3.4, 7.5, 4.8)).toBe(28.44);
});
