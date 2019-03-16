const { TF } = require("./32.js");

test("should return correct results", () => {
  expect(TF(4.69)).toEqual(40.44);
  expect(TF(26.69)).toEqual(80.04);
  expect(TF(23.98)).toEqual(75.16);
});
