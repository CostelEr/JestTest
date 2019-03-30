import { Condition } from "./40";

test("should return correct results", () => {
  expect(Condition(2, 7, 4, 8)).toEqual(true);
  expect(Condition(6, 3, 8, 1)).toEqual(false);
  expect(Condition(4, 5, 5, 6)).toEqual(false);
  expect(Condition(4, 5, 2, 4)).toEqual(true);
  expect(Condition(4, 5, 2, 6)).toEqual(true);
  expect(Condition(4, 5, 5, 7)).toEqual(true);
  expect(Condition(4, 5, 5, 3)).toEqual(true);
});
