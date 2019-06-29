import { F } from "./06";
test("should return correct results", () => {
  expect(F(8, -1, -2)).toEqual([-1, -2, -3, -6, -12, -24, -48, -96]);
  expect(F(10, 5, -1)).toEqual([5, -1, 4, 8, 16, 32, 64, 128, 256, 512]);
  expect(F(5, -4, -1)).toEqual([-4, -1, -5, -10, -20]);
});
