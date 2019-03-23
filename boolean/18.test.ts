import { Condition } from "./18";

test("should return correct results", () => {
  expect(Condition(0, 1, -3)).toEqual(false);
  expect(Condition(-8, 10, 10)).toEqual(true);
  expect(Condition(5, 7, 0)).toEqual(false);
  expect(Condition(-6, 5, 4)).toEqual(false);
  expect(Condition(-1, 1, -1)).toEqual(true);
  expect(Condition(-2, -8, 4)).toEqual(false);
  expect(Condition(-6, 8, -6)).toEqual(true);
});
