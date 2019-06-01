import { F } from "./40";
test("should return correct results", () => {
  expect(F(8, 10)).toEqual([8, 9, 9, 10, 10, 10]);
  expect(F(11, 12)).toEqual([11, 12, 12]);
});
