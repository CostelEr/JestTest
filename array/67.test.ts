import { F } from "./67";
test("should return correct results", () => {
  expect(F(6, [7, -8, -5, -8, -7, 6])).toEqual([0, -8, -12, -8, -14, 6]);
  expect(F(3, [2, 6, -4])).toEqual([2, 6, -4]);
  expect(F(9, [6, -7, 1, 3, -4, -9, -2, 5, 4])).toEqual([
    6,
    -2,
    6,
    8,
    -4,
    -4,
    -2,
    10,
    4
  ]);
});
