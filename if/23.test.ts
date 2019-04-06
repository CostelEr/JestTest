import { F } from "./23";

test("should return correct results", () => {
  expect(F(-2, 7, -5, 10, -5, 7)).toEqual([-2, 10]);
  expect(F(-9, 4, -9, 9, -6, 4)).toEqual([-6, 9]);
  expect(F(8, 1, 8, 9, -7, 9)).toEqual([-7, 1]);
});
