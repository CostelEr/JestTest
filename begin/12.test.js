const { C, P } = require("./12");

test("should return correct results", () => {
  expect(C(3.6, 2.2)).toBe(4.22);
  expect(P(3.6, 2.2)).toBe(10.02);

  expect(C(9.1, 5.1)).toBe(10.43);
  expect(P(9.1, 5.1)).toBe(24.63);
});
