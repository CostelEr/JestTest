import { Condition } from "./30";

test("should return correct results", () => {
  expect(Condition(16, 24, 22)).toEqual(false);
  expect(Condition(1, 1, 1)).toEqual(true);
  expect(Condition(20, 25, 15)).toEqual(false);
  expect(Condition(27, 27, 27)).toEqual(true);
});
