import { F } from "./123";
test("should return correct results", () => {
  expect(F(3, 9, [2, 3, 3, 4, 4, 3, 4, 3, 5])).toEqual([
    4,
    4,
    3,
    3,
    2,
    3,
    4,
    3,
    5
  ]);
  expect(F(5, 5, [4, 4, 4, 4, 2])).toEqual([4, 4, 4, 4, 2]);
  expect(F(4, 6, [4, 1, 2, 3, 2, 4])).toEqual([3, 1, 2, 4, 2, 4]);
});
