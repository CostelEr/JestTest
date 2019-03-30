import { F } from "./5";

test("should return correct results", () => {
  expect(F(-7, -4, -13)).toEqual([0, 3]);
  expect(F(-16, 20, 0)).toEqual([1, 1]);
});
