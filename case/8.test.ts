import { F } from "./8";
test("should return correct results", () => {
  expect(F(1, 10)).toEqual([30, 9]);
  expect(F(12, 2)).toEqual([11, 2]);
  expect(F(1, 4)).toEqual([31, 3]);
  expect(F(1, 1)).toEqual([31, 12]);
});
