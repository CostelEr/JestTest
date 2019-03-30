import { Condition } from "./29";

test("should return correct results", () => {
  expect(Condition(1, 14, 7, -7, 15, -17)).toEqual(false);
  expect(Condition(8, -5, 5, -2, 10, -8)).toEqual(true);
  expect(Condition(-9, -3, -8, 4, -2, -4)).toEqual(false);
});
