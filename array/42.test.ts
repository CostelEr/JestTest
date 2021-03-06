import { F } from "./42";
test("should return correct results", () => {
  expect(F(4, 4, [1, 3, 8, 9])).toEqual([1, 3]);
  expect(
    F(-4.18, 10, [
      8.87,
      -0.16,
      7.62,
      8.89,
      -0.77,
      -3.13,
      -9.16,
      -6.78,
      -7.25,
      -3.16
    ])
  ).toEqual([-0.77, -3.13]);
  expect(
    F(-1.32, 9, [-6.67, 8.52, 1.38, -0.95, 6.1, -1.99, 0.55, -5.63, 2.94])
  ).toEqual([-1.99, 0.55]);
  expect(F(8.06, 5, [2.24, 2.18, -7.16, 2.08, -0.14])).toEqual([2.24, 2.18]);
});
