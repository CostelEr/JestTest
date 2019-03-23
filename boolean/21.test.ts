import { Condition } from "./21";

test("should return correct results", () => {
  expect(Condition(579)).toEqual(true);
  expect(Condition(916)).toEqual(false);
  expect(Condition(457)).toEqual(true);
  expect(Condition(123)).toEqual(true);
  expect(Condition(357)).toEqual(true);
});
