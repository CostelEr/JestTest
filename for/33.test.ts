import { F } from "./33";
test("should return correct results", () => {
  expect(F(12)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
  expect(F(11)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
});
