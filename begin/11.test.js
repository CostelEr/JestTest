const { Sum, Dif, Pro, Quo } = require("./11");

test("should return correct results", () => {
  expect(Sum(-3.6, -6.7)).toBe(10.3);
  expect(Dif(-3.6, -6.7)).toBe(-3.1);
  expect(Pro(-3.6, -6.7)).toBe(24.12);
  expect(Quo(-3.6, -6.7)).toBe(0.54);

  expect(Sum(0.1, 10.8)).toBe(10.9);
  expect(Dif(0.1, 10.8)).toBe(-10.7);
  expect(Pro(0.1, 10.8)).toBe(1.08);
  expect(Quo(0.1, 10.8)).toBe(0.01);
});
