import { Condition } from "./16";

test("should return correct results", () => {
  expect(Condition(386)).toEqual(false);
  expect(Condition(59)).toEqual(false);
  expect(Condition(2)).toEqual(false);
  expect(Condition(72)).toEqual(true);
});
