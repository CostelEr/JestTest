import { Condition } from "./15";

test("should return correct results", () => {
  expect(Condition(2, 4, -7)).toEqual(true);
  expect(Condition(1, -8, 4)).toEqual(true);
  expect(Condition(-7, 4, 9)).toEqual(true);
  expect(Condition(0, -3, -6)).toEqual(false);
});
