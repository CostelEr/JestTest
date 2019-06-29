import { F } from "./05";
test("should return correct results", () => {
  expect(F(4)).toEqual([1, 1, 2, 3]);
  expect(F(6)).toEqual([1, 1, 2, 3, 5, 8]);
  expect(F(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
