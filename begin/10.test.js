const { Sum, Dif, Pro, Quo } = require("./10");

test("should return correct results", () => {
  expect(Sum(1.7, 8.6)).toBe(76.85);
  expect(Dif(1.7, 8.6)).toBe(-71.07);
  expect(Pro(1.7, 8.6)).toBe(213.74);
  expect(Quo(1.7, 8.6)).toBe(0.04);

  expect(Sum(-5, -5.8)).toBe(58.64);
  expect(Dif(-5, -5.8)).toBe(-8.64);
  expect(Pro(-5, -5.8)).toBe(841);
  expect(Quo(-5, -5.8)).toBe(0.74);
});
