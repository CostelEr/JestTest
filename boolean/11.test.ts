import { Condition } from "./11";

test("should return correct results", () => {
  expect(Condition(4, -2)).toEqual(true);
  expect(Condition(-4, 5)).toEqual(false);
  expect(Condition(-8, -3)).toEqual(false);
  expect(Condition(7, -7)).toEqual(true);
  expect(Condition(-5, -1)).toEqual(true);
});
