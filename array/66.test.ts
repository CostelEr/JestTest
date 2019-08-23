import { F } from "./66";
test("should return correct results", () => {
  expect(F(10, [-2, 9, -4, -8, -6, -8, 8, 8, 5, -5])).toEqual([
    -4,
    9,
    -6,
    -10,
    -8,
    -10,
    6,
    6,
    5,
    -5
  ]);
  expect(F(5, [1, -4, 1, 9, 9])).toEqual([1, -8, 1, 9, 9]);
  expect(F(6, [3, -9, 3, 3, -7, 9])).toEqual([3, -9, 3, 3, -7, 9]);
  expect(F(4, [-6, 2, -4, -9])).toEqual([-12, -4, -10, -9]);
});
