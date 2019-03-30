import { F } from "./12";

test("should return correct results", () => {
  expect(F(6.9, 5.74, -2.61)).toEqual(-2.61);
  expect(F(-2.16, -7.7, -7.67)).toEqual(-7.7);
  expect(F(-1.96, 6.09, 8.19)).toEqual(-1.96);
  expect(F(5.02, 3.34, 9.47)).toEqual(3.34);
});
