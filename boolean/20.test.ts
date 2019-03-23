import { Condition } from "./20";

test("should return correct results", () => {
  expect(Condition(635)).toEqual(true);
  expect(Condition(778)).toEqual(false);
  expect(Condition(822)).toEqual(false);
  expect(Condition(769)).toEqual(true);
});
