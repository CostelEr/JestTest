import { F } from "./118";
test("should return correct results", () => {
  expect(F(4, [2, 2, 2, 2])).toEqual([2, 2, 2, 2, 0]);

  expect(F(8, [4, 4, 4, 5, 4, 4, 4, 4])).toEqual([
    4,
    4,
    4,
    0,
    5,
    0,
    4,
    4,
    4,
    4,
    0
  ]);
  expect(F(8, [5, 4, 4, 5, 4, 5, 5, 4])).toEqual([
    5,
    0,
    4,
    4,
    0,
    5,
    0,
    4,
    0,
    5,
    5,
    0,
    4,
    0
  ]);
  expect(F(6, [2, 4, 3, 3, 3, 2])).toEqual([2, 0, 4, 0, 3, 3, 3, 0, 2, 0]);
});
