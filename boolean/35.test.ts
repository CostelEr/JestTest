import { Condition } from "./35";

test("should return correct results", () => {
  expect(Condition(2, 1, 5, 5)).toEqual(false);
  expect(Condition(5, 8, 8, 2)).toEqual(false);
  expect(Condition(5, 3, 5, 7)).toEqual(true);
});
