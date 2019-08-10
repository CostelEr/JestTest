import { F } from "./43";
test("should return correct results", () => {
  expect(F(7, [2, 3, 3, 5, 6, 7, 8])).toEqual(6);
  expect(F(5, [3, 4, 4, 5, 5])).toEqual(3);
  expect(F(10, [2, 5, 5, 5, 7, 7, 7, 8, 8, 9])).toEqual(5);
});
