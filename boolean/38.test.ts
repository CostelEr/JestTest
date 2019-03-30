import { Condition } from "./38";

test("should return correct results", () => {
  expect(Condition(1, 4, 2, 3)).toEqual(true);
  expect(Condition(5, 3, 1, 7)).toEqual(true);
  expect(Condition(7, 3, 8, 8)).toEqual(false);
});
