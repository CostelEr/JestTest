import { F } from "./47";
test("should return correct results", () => {
  expect(F(5, [7, 2, 2, 4, 4])).toEqual(3);
  expect(F(7, [3, 3, 2, 2, 2, 6, 3])).toEqual(3);
  expect(F(9, [3, 7, 3, 3, 4, 2, 3, 3, 8])).toEqual(5);
});
