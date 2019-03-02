const { V, S } = require("./6");

test("should return correct results", () => {
  expect(V(9.0, 1.2, 9.4)).toBe(101.52);
  expect(S(9.0, 1.2, 9.4)).toBe(213.36);

  expect(V(9.7, 4.9, 8.1)).toBe(384.993);
  expect(S(9.7, 4.9, 8.1)).toBe(331.58);
});
