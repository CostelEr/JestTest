import { Condition } from "./32";

test("should return correct results", () => {
  expect(Condition(5, 6, 2)).toEqual(false);
  expect(Condition(29, 20, 21)).toEqual(true);
  expect(Condition(15, 13, 8)).toEqual(false);
  expect(Condition(13, 21, 24)).toEqual(false);
  expect(Condition(8, 10, 6)).toEqual(true);
});
