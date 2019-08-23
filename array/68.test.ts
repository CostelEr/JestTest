import { F } from "./68";
test("should return correct results", () => {
  expect(F(7, [4.24, -7.61, -0.76, -6.74, -8.51, -4.42, 7.35])).toEqual([
    4.24,
    -7.61,
    -0.76,
    -6.74,
    7.35,
    -4.42,
    -8.51
  ]);
  expect(F(8, [-6.92, 9.51, 6.47, 4.76, 8.24, -5.85, -8.19, -4.78])).toEqual([
    -6.92,
    -8.19,
    6.47,
    4.76,
    8.24,
    -5.85,
    9.51,
    -4.78
  ]);
  expect(F(7, [7.09, -8.66, -9.53, 2.61, 3.12, 5.24, 8.51])).toEqual([
    7.09,
    -8.66,
    8.51,
    2.61,
    3.12,
    5.24,
    -9.53
  ]);
});
