import { F } from "./31";
test("should return correct results", () => {
  expect(F(6, [5.68, 5.2, 4.2, -0.34, -7.46, -8.43])).toEqual([0]);
  expect(F(2, [1.08, -1.1])).toEqual([0]);
  expect(F(3, [-4.29, -3.51, 2.89])).toEqual([3, 2, 2]);
  expect(F(3, [-7.14, 1.48, -7.7])).toEqual([2, 1]);
  expect(F(6, [-4.01, -7.66, -8.36, 6.07, 2.7, 7.23])).toEqual([6, 4, 2]);
});
