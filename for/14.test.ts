import { F } from "./14";
test("should return correct results", () => {
  expect(F(3)).toEqual([1, 4, 9]);
  expect(F(7)).toEqual([1, 4, 9, 16, 25, 36, 49]);
  expect(F(4)).toEqual([1, 4, 9, 16]);
});
