import { F } from "./5";
test("should return correct results", () => {
  expect(F(58.1)).toEqual([5.81, 11.62, 17.43, 23.24]);
  expect(F(31.6)).toEqual([3.16, 6.32, 9.48, 12.64]);
});
