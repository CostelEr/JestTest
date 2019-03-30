import { Condition } from "./23";

test("should return correct results", () => {
  expect(Condition(8030)).toEqual(false);
  expect(Condition(5954)).toEqual(false);
  expect(Condition(2552)).toEqual(true);
});
