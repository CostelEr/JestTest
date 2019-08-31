import { F } from "./75";
test("should return correct results", () => {
  expect(F(6, [-4.13, 0.85, 2.26, -4.24, 0.44, 1.45])).toEqual([
    -4.13,
    0.85,
    -4.24,
    2.26,
    0.44,
    1.45
  ]);
  expect(F(7, [-6.8, -7.1, -1.87, 1.58, 8.02, 6.37, -6.67])).toEqual([
    -6.8,
    8.02,
    1.58,
    -1.87,
    -7.1,
    6.37,
    -6.67
  ]);
  expect(F(8, [4.1, -4.96, -1.41, -8.06, -3.46, -5.51, -8.6, -0.29])).toEqual([
    -8.6,
    -5.51,
    -3.46,
    -8.06,
    -1.41,
    -4.96,
    4.1,
    -0.29
  ]);
});