import { Condition } from "./9";

test("should return correct results", () => {
  expect(Condition(1, 3)).toEqual(true);
  expect(Condition(-2, 8)).toEqual(false);
  expect(Condition(0, -9)).toEqual(true);
  expect(Condition(-5, -7)).toEqual(true);
});
