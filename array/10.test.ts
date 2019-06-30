import { F } from "./10";
test("should return correct results", () => {
  expect(F(9, [8, 10, 1, 9, 8, 4, 5, 6, 9])).toEqual([
    8,
    10,
    8,
    4,
    6,
    9,
    5,
    9,
    1
  ]);
  expect(F(2, [5, 1])).toEqual([1, 5]);
  expect(F(3, [6, 9, 4])).toEqual([6, 4, 9]);
});
