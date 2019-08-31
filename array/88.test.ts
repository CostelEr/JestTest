import { F } from "./88";
test("should return correct results", () => {
  expect(F(6, [-8.66, 5.21, 7.35, 8.05, 9.74, 7.8])).toEqual([
    -8.66,
    5.21,
    7.35,
    7.8,
    8.05,
    9.74
  ]);
  expect(F(6, [-7.5, -6.93, -1.77, -1.13, 1.41, -2.22])).toEqual([
    -7.5,
    -6.93,
    -2.22,
    -1.77,
    -1.13,
    1.41
  ]);
  expect(F(8, [-7.48, -6.24, -4.79, -2.82, 0.73, 5.99, 9.43, -9.42])).toEqual([
    -9.42,
    -7.48,
    -6.24,
    -4.79,
    -2.82,
    0.73,
    5.99,
    9.43
  ]);
});
