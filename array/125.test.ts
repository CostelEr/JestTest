import { F } from "./125";
test("should return correct results", () => {
  expect(F(4, 7, [4, 4, 4, 5, 5, 4, 5])).toEqual([0, 0, 0, 0]);
  expect(F(2, 7, [4, 4, 4, 5, 5, 4, 5])).toEqual([4, 4, 4, 5, 5, 0, 0]);
  expect(F(2, 10, [4, 5, 4, 4, 4, 5, 5, 4, 5, 4])).toEqual([
    0,
    0,
    4,
    4,
    4,
    5,
    5,
    0,
    0,
    0
  ]);
  expect(F(3, 9, [7, 6, 8, 8, 6, 8, 5, 5, 5])).toEqual([
    0,
    0,
    0,
    0,
    0,
    5,
    5,
    5
  ]);
});
