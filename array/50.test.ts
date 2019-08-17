import { F } from "./50";
test("should return correct results", () => {
  expect(F(9, [3, 9, 4, 6, 5, 1, 2, 7, 8])).toEqual(16);
  expect(F(6, [1, 4, 3, 5, 2, 6])).toEqual(4);
  expect(F(6, [3, 6, 1, 4, 2, 5])).toEqual(7);
});
