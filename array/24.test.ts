import { F } from "./24";
test("should return correct results", () => {
  expect(F(7, [4, 3, 2, 1, 0, -1, -2])).toEqual(-1);
  expect(F(5, [7, 4, 1, -2, -5])).toEqual(-3);
  expect(F(6, [9, 12, 15, 18, 21, 24])).toEqual(3);
  expect(F(5, [4, 3, 2, 6, 0])).toEqual(0);
});
