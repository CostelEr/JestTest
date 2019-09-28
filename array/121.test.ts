import { F } from "./121";
test("should return correct results", () => {
  expect(F(4, 8, [2, 3, 2, 4, 4, 3, 2, 4])).toEqual([
    2,
    3,
    2,
    4,
    4,
    4,
    4,
    3,
    2,
    4
  ]);
  expect(F(1, 10, [2, 2, 2, 3, 2, 4, 4, 3, 2, 4])).toEqual([
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    2,
    4,
    4,
    3,
    2,
    4
  ]);
  expect(F(4, 6, [2, 1, 1, 1, 1, 2])).toEqual([2, 1, 1, 1, 1, 2]);
  expect(F(3, 9, [6, 6, 5, 5, 5, 5, 6, 5, 6])).toEqual([
    6,
    6,
    5,
    5,
    5,
    5,
    6,
    6,
    5,
    6
  ]);
});
