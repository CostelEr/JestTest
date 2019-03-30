import { Condition } from "./28";

test("should return correct results", () => {
  expect(Condition(8.76, 9.03)).toEqual(true);
  expect(Condition(2.67, -7.13)).toEqual(false);
  expect(Condition(-9.54, -7.92)).toEqual(true);
});
