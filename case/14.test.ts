import { F } from "./14";
test("should return correct results", () => {
  expect(F(3, 1.62)).toEqual([2.8, 0.8, 3.4]);
  expect(F(1, 5.45)).toEqual([1.6, 3.1, 12.9]);
  expect(F(2, 6.32)).toEqual([21.9, 12.6, 207.5]);
  expect(F(4, 69.27)).toEqual([12.6, 3.7, 7.3]);
  expect(F(4, 79.35)).toEqual([13.5, 3.9, 7.8]);
  expect(F(2, 3.26)).toEqual([11.3, 6.5, 55.2]);
});
