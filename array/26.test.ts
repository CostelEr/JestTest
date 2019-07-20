import { F } from "./26";
test("should return correct results", () => {
  expect(F(9, [-3, -2, -1, 0, 3, 4, 3, 2, -3])).toEqual(0);
  expect(F(8, [-4, -3, -5, -5, -5, 4, -5, 3])).toEqual(3);
  expect(F(9, [-4, -4, 3, 3, 3, -7, 4, -7, 5])).toEqual(2);
});
