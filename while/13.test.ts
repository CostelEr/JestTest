import { F } from "./13";
test("should return correct results", () => {
  expect(F(10)).toEqual([4, 10]);
  expect(F(7)).toEqual([3, 6]);
  expect(F(8)).toEqual([3, 6]);
  expect(F(9)).toEqual([3, 6]);
  expect(F(35)).toEqual([7, 28]);
  expect(F(13)).toEqual([4, 10]);
  expect(F(5)).toEqual([2, 3]);
});
