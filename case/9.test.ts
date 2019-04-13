import { F } from "./9";
test("should return correct results", () => {
  expect(F(29, 4)).toEqual([30, 4]);
  expect(F(30, 4)).toEqual([1, 5]);
  expect(F(23, 2)).toEqual([24, 2]);
  expect(F(30, 9)).toEqual([1, 10]);
});
