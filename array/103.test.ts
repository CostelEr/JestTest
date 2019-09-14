import { F } from "./103";
test("should return correct results", () => {
  expect(F(7, [-4.2, -9.91, -1.89, -7.03, 3.84, 1.83, -1.89])).toEqual([
    -4.2,
    0,
    -9.91,
    -1.89,
    -7.03,
    3.84,
    0,
    1.83,
    -1.89
  ]);
  expect(F(6, [6.69, -3.25, -4.23, -9.48, 6.58, 3.93])).toEqual([
    6.69,
    0,
    -3.25,
    -4.23,
    0,
    -9.48,
    6.58,
    3.93
  ]);
  expect(F(7, [1.77, -6.16, 4.67, -3.03, 1.26, 3.1, -8.96])).toEqual([
    1.77,
    -6.16,
    4.67,
    0,
    -3.03,
    1.26,
    3.1,
    0,
    -8.96
  ]);
});
