const { L, S } = require("./7");

test("should return correct results", () => {
  expect(L(2.5)).toBe(15.7);
  expect(S(2.5)).toBe(19.625);

  expect(L(7)).toBe(43.96);
  expect(S(7)).toBe(153.86);

  expect(L(8.5)).toBe(53.38);
  expect(S(8.5)).toBe(226.865);
});
