import { F } from "./45";
test("should return correct results", () => {
  expect(F(7, [2, 3, 3, 5, 6, 7, 8])).toEqual([2, 3]);
  expect(
    F(10, [0.96, 6.28, 8.76, 7.57, -5.45, 3.7, -4.66, -2.24, -7.46, -9.3])
  ).toEqual([5, 7]);
  expect(F(5, [-2.53, -5.42, 1.55, 6.59, 2.16])).toEqual([3, 5]);
  expect(
    F(9, [-2.48, 4.28, -9.06, -4.72, -7.9, -4.71, 8.91, 1.99, -0.29])
  ).toEqual([4, 6]);
  expect(F(7, [2, 3, 2, 5, 6, 7, 8])).toEqual([1, 3]);
});
