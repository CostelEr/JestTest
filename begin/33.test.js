const { Cost } = require("./33.js");

test("should return correct results", () => {
  expect(Cost(4.7, 464.36, 1.4)).toEqual([98.8, 138.32]);
  expect(Cost(4.2, 262.92, 2.1)).toEqual([62.6, 131.46]);
});
