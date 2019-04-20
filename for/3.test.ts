import { F } from "./3";
test("should return correct results", () => {
  expect(F(-9, -5)).toEqual([[-6, -7, -8], 3]);
  expect(F(1, 6)).toEqual([[5, 4, 3, 2], 4]);
  expect(F(1, 2)).toEqual([[], 0]);
  expect(F(-3, -1)).toEqual([[-2], 1]);
});
