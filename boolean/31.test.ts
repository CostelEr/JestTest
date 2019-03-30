import { Condition } from "./31";

test("should return correct results", () => {
  expect(Condition(19, 22, 13)).toEqual(false);
  expect(Condition(22, 14, 22)).toEqual(true);
  expect(Condition(19, 19, 29)).toEqual(true);
  expect(Condition(26, 20, 8)).toEqual(false);
});
