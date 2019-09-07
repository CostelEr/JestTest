import { F } from "./100";
test("should return correct results", () => {
  expect(F(7, [5, 6, 6, 5, 7, 6, 7])).toEqual([3, [6, 6, 6]]);
  expect(F(7, [4, 5, 4, 4, 3, 4, 3])).toEqual([5, [4, 5, 4, 4, 4]]);
  expect(F(8, [5, 3, 7, 7, 6, 7, 3, 5])).toEqual([4, [7, 7, 6, 7]]);
});
