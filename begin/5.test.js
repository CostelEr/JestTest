const { V, S } = require("./5");

test("should return correct results", () => {
  expect(V(2.5)).toBe(15.625);
  expect(S(2.5)).toBe(37.5);

  expect(V(5.5)).toBe(166.375);
  expect(S(5.5)).toBe(181.5);

  expect(V(7.5)).toBe(421.875);
  expect(S(7.5)).toBe(337.5);
});
