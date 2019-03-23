import { Condition } from "./5";

test("should return correct results", () => {
  expect(Condition(0, 0)).toEqual(true);
  expect(Condition(-2, -4)).toEqual(true);
  expect(Condition(-3, -2)).toEqual(false);
});
