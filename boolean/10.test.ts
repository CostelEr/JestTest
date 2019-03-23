import { Condition } from "./10";

test("should return correct results", () => {
  expect(Condition(-3, 9)).toEqual(false);
  expect(Condition(5, 7)).toEqual(false);
  expect(Condition(4, -9)).toEqual(true);
  expect(Condition(6, -1)).toEqual(true);
  expect(Condition(4, 2)).toEqual(false);
});
