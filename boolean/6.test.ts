import { Condition } from "./6";

test("should return correct results", () => {
  expect(Condition(56, 85, 93)).toEqual(true);
  expect(Condition(1, 29, 45)).toEqual(true);
  expect(Condition(82, 23, 51)).toEqual(false);
});
