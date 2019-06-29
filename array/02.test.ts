import { F } from "./02";
test("should return correct results", () => {
  expect(F(6)).toEqual([2, 4, 8, 16, 32, 64]);
});
