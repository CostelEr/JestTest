import { Condition } from "./4";

test("should return correct results", () => {
  expect(Condition(4, 2)).toEqual(true);
  expect(Condition(0, 4)).toEqual(false);
  expect(Condition(5, 4)).toEqual(false);
  expect(Condition(0, 0)).toEqual(false);
  expect(Condition(5, 2)).toEqual(true);
});
