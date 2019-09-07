import { F } from "./97";
test("should return correct results", () => {
  expect(F(7, [1, 2, 1, 2, 1, 3, 1])).toEqual([2, 3, 1]);
  expect(F(9, [3, 5, 3, 5, 4, 4, 5, 4, 5])).toEqual([3, 4, 5]);
  expect(F(9, [4, 2, 2, 4, 2, 3, 2, 2, 4])).toEqual([3, 2, 4]);
});
