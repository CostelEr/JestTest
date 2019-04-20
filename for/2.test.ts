import { F } from "./2";
test("should return correct results", () => {
  expect(F(5, 10)).toEqual([[5, 6, 7, 8, 9, 10], 6]);
  expect(F(-9, -8)).toEqual([[-9, -8], 2]);
});
