import { F } from "./95";
test("should return correct results", () => {
  expect(F(10, [4, 4, 4, 2, 2, 2, 3, 3, 4, 3])).toEqual([4, 2, 3, 4, 3]);
  expect(F(6, [2, 1, 3, 3, 3, 1])).toEqual([2, 1, 3, 1]);
  expect(F(10, [1, 2, 1, 1, 1, 2, 2, 1, 1, 1])).toEqual([1, 2, 1, 2, 1]);
});
