import { Condition } from "./17";

test("should return correct results", () => {
  expect(Condition(7714)).toEqual(false);
  expect(Condition(286)).toEqual(false);
  expect(Condition(1)).toEqual(false);
  expect(Condition(6754)).toEqual(false);
  expect(Condition(981)).toEqual(true);
  expect(Condition(465)).toEqual(true);
  expect(Condition(999)).toEqual(true);
  expect(Condition(101)).toEqual(true);
});
