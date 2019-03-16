const { Choc } = require("./34.js");

test("should return correct results", () => {
  expect(Choc(3.5, 334.53, 0.5, 8.1)).toEqual([95.58, 16.2, 5.9]);
});
