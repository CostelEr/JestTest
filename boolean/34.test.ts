import { Condition } from "./34";

test("should return correct results", () => {
  expect(Condition(3, 2)).toEqual(true);
  expect(Condition(5, 4)).toEqual(true);
  expect(Condition(5, 6)).toEqual(true);
  expect(Condition(7, 3)).toEqual(false);
});
