import { F } from "./96";
test("should return correct results", () => {
  expect(F(9, [4, 4, 5, 5, 3, 5, 3, 5, 5])).toEqual([4, 5, 3]);
  expect(F(7, [5, 6, 7, 7, 5, 6, 8])).toEqual([5, 6, 7, 8]);
  expect(F(10, [7, 9, 9, 9, 8, 8, 7, 8, 9, 5])).toEqual([7, 9, 8, 5]);
});
