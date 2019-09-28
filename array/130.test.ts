import { F } from "./130";
test("should return correct results", () => {
  expect(F(6, [4, 5, 4, 5, 4, 5])).toEqual([
    4,
    4,
    5,
    5,
    4,
    4,
    5,
    5,
    4,
    4,
    5,
    5
  ]);
  expect(F(6, [4, 1, 4, 4, 3, 1])).toEqual([4, 1, 4, 4, 4, 3, 1]);
  expect(F(9, [5, 5, 5, 5, 5, 5, 5, 5, 5])).toEqual([
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5
  ]);
  expect(F(5, [2, 2, 3, 3, 2])).toEqual([2, 2, 2, 3, 3, 3, 2]);
});
