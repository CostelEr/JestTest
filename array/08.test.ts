import { F } from "./08";
test("should return correct results", () => {
  expect(F(8, [2, 3, 6, 4, 9, 7, 10, 2])).toEqual([[3, 9, 7], 3]);
  expect(F(9, [8, 3, 1, 6, 7, 2, 3, 3, 8])).toEqual([[3, 1, 7, 3, 3], 5]);
  expect(F(4, [6, 9, 6, 2])).toEqual([[9], 1]);
});
