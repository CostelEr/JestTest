import { F } from "./11";
test("should return correct results", () => {
  expect(F(5)).toEqual([3, 6]);
  expect(F(28)).toEqual([7, 28]);
  expect(F(484)).toEqual([31, 496]);
  expect(F(8)).toEqual([4, 10]);
  expect(F(214)).toEqual([21, 231]);
});
