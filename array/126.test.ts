import { F } from "./126";
test("should return correct results", () => {
  expect(F(3, 9, [5, 5, 5, 3, 3, 4, 3, 5, 4])).toEqual([0, 3, 3, 4, 3, 5, 4]);
  expect(F(3, 6, [3, 3, 3, 2, 2, 3])).toEqual([0, 2, 2, 3]);
  expect(F(1, 5, [6, 6, 7, 5, 5])).toEqual([6, 6, 0, 5, 5]);
});
