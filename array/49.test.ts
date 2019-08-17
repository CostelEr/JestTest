import { F } from "./49";
test("should return correct results", () => {
  expect(F(9, [7, 4, 6, 10, 9, 2, 3, 1, 5])).toEqual(4);
  expect(F(5, [1, 5, 2, 3, 4])).toEqual(0);
  expect(F(6, [5, 4, 3, 1, 0, 6])).toEqual(5);
  expect(F(7, [3, 4, 6, 5, 6, 1, 2])).toEqual(5);
  expect(F(7, [6, 3, 6, 1, 5, 2, 4])).toEqual(3);
  expect(F(7, [6, 3, 6, 1, 0, 2, 4])).toEqual(3);
  expect(F(7, [6, 0, 6, 1, 5, 2, 4])).toEqual(2);
});
