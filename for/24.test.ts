import { F } from "./24";
test("should return correct results", () => {
  expect(F(-1.15299717, 1)).toEqual(0.33529876);
  expect(F(-1.79895287, 4)).toEqual(-0.22608676);
  expect(F(0.33451489, 5)).toEqual(0.94456969);
});
