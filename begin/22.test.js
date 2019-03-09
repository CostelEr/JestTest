const { SW } = require("./22.js");

test("should return correct results", () => {
  expect(SW([1.7, 9.38])).toEqual([9.38, 1.7]);
  expect(SW([5.74, 5.02])).toEqual([5.02, 5.74]);
});
