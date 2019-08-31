import { F } from "./83";
test("should return correct results", () => {
  expect(F(8, [-6.23, -4.98, -3.98, 2.8, -9.47, 7.23, -6.7, -0.52])).toEqual([
    -0.52,
    -6.23,
    -4.98,
    -3.98,
    2.8,
    -9.47,
    7.23,
    -6.7
  ]);
  expect(F(5, [3.81, 8.5, 0.91, 5.22, -8.14])).toEqual([
    -8.14,
    3.81,
    8.5,
    0.91,
    5.22
  ]);
  expect(F(5, [-1.25, -2.93, -9.32, -8.46, -1.75])).toEqual([
    -1.75,
    -1.25,
    -2.93,
    -9.32,
    -8.46
  ]);
});