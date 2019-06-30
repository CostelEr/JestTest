import { F } from "./09";
test("should return correct results", () => {
  expect(F(5, [5, 6, 7, 4, 4])).toEqual([[4, 4, 6], 3]);
  expect(F(8, [2, 10, 1, 5, 9, 4, 4, 7])).toEqual([[4, 4, 10, 2], 4]);
  expect(F(3, [10, 5, 6])).toEqual([[6, 10], 2]);
});
