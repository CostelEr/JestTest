import { F } from "./116";
test("should return correct results", () => {
  expect(F(9, [3, 2, 3, 2, 2, 2, 3, 3, 3])).toEqual([
    [1, 1, 1, 3, 3],
    [3, 2, 3, 2, 3]
  ]);
  expect(F(5, [3, 3, 2, 3, 3])).toEqual([[2, 1, 2], [3, 2, 3]]);
  expect(F(8, [5, 5, 5, 5, 5, 5, 5, 5])).toEqual([[8], [5]]);
});
