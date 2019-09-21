import { F } from "./120";
test("should return correct results", () => {
  expect(F(8, [4, 4, 4, 4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4, 4, 4]);
  expect(F(8, [5, 4, 3, 5, 3, 5, 5, 4])).toEqual([5]);
  expect(F(5, [4, 4, 4, 5, 4])).toEqual([4, 4]);
});
