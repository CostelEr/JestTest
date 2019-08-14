import { F } from "./48";
test("should return correct results", () => {
  expect(F(8, [2, 2, 2, 2, 2, 2, 2, 2])).toEqual(8);
  expect(F(10, [7, 5, 7, 6, 7, 6, 5, 7, 5, 5])).toEqual(4);
  expect(F(8, [2, 2, 3, 2, 4, 4, 4])).toEqual(3);
  expect(F(5, [7, 6, 5, 5, 7])).toEqual(2);
  expect(F(5, [6, 6, 5, 6, 6])).toEqual(4);
});
