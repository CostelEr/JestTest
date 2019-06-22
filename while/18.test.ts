import { F } from "./18";
test("should return correct results", () => {
  expect(F(37)).toEqual([2, 10]);
  expect(F(3)).toEqual([1, 3]);
  expect(F(4849)).toEqual([4, 25]);
  expect(F(408)).toEqual([3, 12]);
  expect(F(19)).toEqual([2, 10]);
});
