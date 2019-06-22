import { F } from "./17";
test("should return correct results", () => {
  expect(F(5534)).toEqual([4, 3, 5, 5]);
  expect(F(140)).toEqual([0, 4, 1]);
  expect(F(6973)).toEqual([3, 7, 9, 6]);
  expect(F(436)).toEqual([6, 3, 4]);
  expect(F(28)).toEqual([8, 2]);
});
