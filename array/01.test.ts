import { F } from "./01";
test("should return correct results", () => {
  expect(F(5)).toEqual([1, 3, 5, 7, 9]);
  expect(F(1)).toEqual([1]);
  expect(F(3)).toEqual([1, 3, 5]);
});
