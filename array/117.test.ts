import { F } from "./117";
test("should return correct results", () => {
  expect(F(9, [2, 1, 1, 2, 1, 2, 2, 2, 2])).toEqual([
    0,
    2,
    0,
    1,
    1,
    0,
    2,
    0,
    1,
    0,
    2,
    2,
    2,
    2
  ]);
  expect(F(9, [6, 6, 6, 6, 6, 5, 5, 6, 5])).toEqual([
    0,
    6,
    6,
    6,
    6,
    6,
    0,
    5,
    5,
    0,
    6,
    0,
    5
  ]);
  expect(F(7, [2, 2, 2, 2, 2, 2, 2])).toEqual([0, 2, 2, 2, 2, 2, 2, 2]);
});
