import { Condition } from "./13";

test("should return correct results", () => {
  expect(Condition(4, 6, 5)).toEqual(true);
  expect(Condition(-1, 0, -7)).toEqual(false);
  expect(Condition(0, -2, -2)).toEqual(false);
  expect(Condition(-9, 7, 7)).toEqual(true);
});
