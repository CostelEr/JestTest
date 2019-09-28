import { F } from "./122";
test("should return correct results", () => {
  expect(F(5, 9, [2, 1, 2, 2, 1, 2, 2, 2, 2])).toEqual([2, 1, 2, 2, 1]);
  expect(F(1, 9, [2, 1, 2, 2, 1, 2, 2, 2, 2])).toEqual([
    1,
    2,
    2,
    1,
    2,
    2,
    2,
    2
  ]);
  expect(F(2, 6, [1, 2, 2, 1, 2, 1])).toEqual([1, 1, 2, 1]);
  expect(F(3, 7, [1, 2, 2, 1, 1, 1, 1])).toEqual([1, 2, 2]);
});
