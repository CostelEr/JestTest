import { Condition } from "./37";

test("should return correct results", () => {
  expect(Condition(3, 5, 3, 4)).toEqual(true);
  expect(Condition(6, 4, 2, 8)).toEqual(false);
  expect(Condition(2, 4, 2, 5)).toEqual(true);
  expect(Condition(8, 6, 7, 5)).toEqual(true);
});
