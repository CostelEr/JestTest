import { Condition } from "./19";

test("should return correct results", () => {
  expect(Condition(9, -9, -1)).toEqual(true);
  expect(Condition(3, -6, -2)).toEqual(false);
  expect(Condition(-5, -1, 9)).toEqual(false);
  expect(Condition(-3, -5, 5)).toEqual(true);
  expect(Condition(2, 3, 3)).toEqual(false);
  expect(Condition(8, -3, 3)).toEqual(true);
});
