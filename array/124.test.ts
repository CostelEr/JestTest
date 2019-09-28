import { F } from "./124";
test("should return correct results", () => {
  expect(F(3, 9, [4, 5, 5, 5, 5, 5, 5, 4, 5])).toEqual([
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    4
  ]);
  expect(F(1, 10, [6, 5, 6, 6, 5, 7, 6, 5, 7, 7])).toEqual([
    7,
    7,
    5,
    6,
    6,
    5,
    7,
    6,
    5,
    6
  ]);
  expect(F(2, 7, [5, 4, 5, 5, 3, 2, 2])).toEqual([5, 2, 2, 5, 5, 3, 4]);
});
