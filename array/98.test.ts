import { F } from "./98";
test("should return correct results", () => {
  expect(F(9, [5, 2, 4, 2, 2, 2, 4, 4, 2])).toEqual([2, 4, 2, 2, 2, 4, 4, 2]);
  expect(F(10, [1, 4, 2, 1, 2, 4, 2, 1, 1, 3])).toEqual([1, 2, 1, 2, 2, 1, 1]);
  expect(F(9, [3, 3, 3, 2, 3, 2, 1, 1, 2])).toEqual([3, 3, 3, 2, 3, 2, 2]);
});
