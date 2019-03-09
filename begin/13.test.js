const { S1, S2, S3 } = require("./13");

test("should return correct results", () => {
  expect(S1(10)).toBe(314);
  expect(S2(5)).toBe(78.5);
  expect(S3(10, 5)).toBe(235.5);

  expect(S1(4)).toBe(50.24);
  expect(S2(3)).toBe(28.26);
  expect(S3(4, 3)).toBe(21.98);
});
