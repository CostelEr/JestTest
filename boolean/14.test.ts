import { Condition } from "./14";

test("should return correct results", () => {
  expect(Condition(-5, 0, -9)).toEqual(false);
  expect(Condition(-5, -1, 5)).toEqual(true);
  expect(Condition(1, -8, 4)).toEqual(false);
});
