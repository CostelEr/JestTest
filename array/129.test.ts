import { F } from "./129";
test("should return correct results", () => {
  expect(F(6, [4, 4, 3, 3, 4, 4])).toEqual([4, 4, 3, 3, 4, 4, 4]);
  expect(F(5, [4, 4, 4, 4, 4])).toEqual([4, 4, 4, 4, 4, 4]);
  expect(F(8, [4, 3, 4, 6, 6, 6, 5, 3])).toEqual([4, 3, 4, 6, 6, 6, 6, 5, 3]);
});
