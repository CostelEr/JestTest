import { F } from "./99";
test("should return correct results", () => {
  expect(F(8, [5, 3, 5, 4, 5, 5, 3, 3])).toEqual([1, [4]]);
  expect(F(9, [5, 7, 6, 5, 7, 5, 5, 6, 5])).toEqual([4, [7, 6, 7, 6]]);
  expect(F(8, [7, 7, 7, 5, 8, 8, 6, 7])).toEqual([4, [5, 8, 8, 6]]);
});
