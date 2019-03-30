import { F } from "./8";

test("should return correct results", () => {
  expect(F(9.44, -6.68)).toEqual([9.44, -6.68]);
  expect(F(-2.99, 1.76)).toEqual([1.76, -2.99]);
});
