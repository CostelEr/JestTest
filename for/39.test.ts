import { F } from "./39";
test("should return correct results", () => {
  expect(F(2, 4)).toEqual([2, 2, 3, 3, 3, 4, 4, 4, 4]);
  expect(F(2, 6)).toEqual([
    2,
    2,
    3,
    3,
    3,
    4,
    4,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    6,
    6,
    6,
    6,
    6,
    6
  ]);
});
