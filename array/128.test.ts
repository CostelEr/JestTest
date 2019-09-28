import { F } from "./128";
test("should return correct results", () => {
  expect(F(6, [8, 8, 6, 5, 5, 5])).toEqual([8, 8, 6, 5, 5, 5, 5]);
  expect(F(10, [5, 8, 6, 7, 7, 8, 5, 5, 9, 6])).toEqual([
    5,
    8,
    6,
    7,
    7,
    7,
    8,
    5,
    5,
    9,
    6
  ]);
  expect(F(6, [5, 6, 6, 8, 7, 5])).toEqual([5, 6, 6, 6, 8, 7, 5]);
});
