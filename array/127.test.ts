import { F } from "./127";
test("should return correct results", () => {
  expect(F(1, 9, [4, 3, 4, 4, 3, 4, 3, 3, 3])).toEqual([4, 3, 0, 3, 4, 0]);
  expect(F(3, 8, [1, 3, 2, 3, 3, 3, 1, 1])).toEqual([1, 3, 2, 3, 3, 3, 1, 1]);
  expect(F(2, 8, [1, 3, 2, 3, 3, 3, 1, 1])).toEqual([1, 3, 2, 0, 1, 1]);
  expect(F(2, 10, [2, 2, 1, 1, 1, 1, 1, 1, 1, 1])).toEqual([2, 2, 0]);
});
