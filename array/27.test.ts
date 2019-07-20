import { F } from "./27";
test("should return correct results", () => {
  expect(F(7, [-4, 4, -6, 6, -5, 7, -5])).toEqual(0);
  expect(F(9, [-4, -5, -7, -7, 6, -5, 4, -5, -6])).toEqual(2);
  expect(F(8, [-8, 3, -5, 5, -8, 1, -1, 1])).toEqual(0);
});
