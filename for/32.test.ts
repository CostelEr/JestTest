import { F } from "./32";
test("should return correct results", () => {
  expect(F(5)).toEqual([2, 1.5, 0.833333, 0.458333, 0.291667]);
  expect(F(2)).toEqual([2, 1.5]);
});
