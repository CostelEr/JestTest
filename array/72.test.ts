import { F } from "./72";
test("should return correct results", () => {
  expect(F(7, [-6.38, 8.3, 9.6, -9.42, 9.78, -7.26, 1.24], 2, 3)).toEqual([
    -6.38,
    9.6,
    8.3,
    -9.42,
    9.78,
    -7.26,
    1.24
  ]);
  expect(F(7, [0.31, 2.6, 4.09, 2.97, 5.64, 0.67, -8.95], 3, 6)).toEqual([
    0.31,
    2.6,
    0.67,
    5.64,
    2.97,
    4.09,
    -8.95
  ]);
  expect(F(7, [-3.71, -5.48, 9.48, -7.46, -1.46, -3.45, 2.86], 3, 7)).toEqual([
    -3.71,
    -5.48,
    2.86,
    -3.45,
    -1.46,
    -7.46,
    9.48
  ]);
});
