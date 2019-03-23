import { Condition } from "./12";

test("should return correct results", () => {
  expect(Condition(4, 6, 5)).toEqual(true);
  expect(Condition(0, -6, 0)).toEqual(false);
  expect(Condition(-4, -1, 3)).toEqual(false);
  expect(Condition(7, 2, 7)).toEqual(true);
  expect(Condition(8, 4, 4)).toEqual(true);
  expect(Condition(7, 2, 7)).toEqual(true);
});
