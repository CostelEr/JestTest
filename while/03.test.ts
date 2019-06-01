import { F } from "./03";
test("should return correct results", () => {
  expect(F(82, 14)).toEqual([5, 12]);
  expect(F(11, 47)).toEqual([0, 11]);
  expect(F(8, 2)).toEqual([4, 0]);
});
