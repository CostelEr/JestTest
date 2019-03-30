import { Condition } from "./33";

test("should return correct results", () => {
  expect(Condition(3, 5, 18)).toEqual(false);
  expect(Condition(25, 26, 12)).toEqual(true);
  expect(Condition(4, 8, 21)).toEqual(false);
  expect(Condition(16, 3, 4)).toEqual(false);
  expect(Condition(15, 25, 24)).toEqual(true);
  expect(Condition(2, 2, 3)).toEqual(true);
});
