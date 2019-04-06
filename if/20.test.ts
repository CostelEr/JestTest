import { F } from "./20";

test("should return correct results", () => {
  expect(F(2.36, 8.8, 3.72)).toEqual([3.72, 1.36]);
  expect(F(-0.43, 7.27, -4.31)).toEqual([-4.31, 3.88]);
  expect(F(6.99, -5.71, -9.25)).toEqual([-5.71, 12.7]);
  expect(F(8.05, 3.06, -8.34)).toEqual([3.06, 4.99]);
});
