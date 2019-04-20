import { F } from "./1";
test("should return correct results", () => {
  expect(F(-3, 3)).toEqual([-3, -3, -3]);
  expect(F(5, 4)).toEqual([5, 5, 5, 5]);
});
