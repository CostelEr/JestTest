import { F } from "./14";

test("should return correct results", () => {
  expect(F(8.01, 2.77, -5.05)).toEqual([-5.05, 8.01]);
  expect(F(-3.0, -5.34, -7.5)).toEqual([-7.5, -3.0]);
  expect(F(-0.23, -1.36, -0.58)).toEqual([-1.36, -0.23]);
  expect(F(2, 2, 1)).toEqual([1, 2]);
});
