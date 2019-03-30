import { Condition } from "./39";

test("should return correct results", () => {
  expect(Condition(3, 4, 3, 6)).toEqual(true);
  expect(Condition(6, 8, 7, 7)).toEqual(true);
  expect(Condition(3, 4, 3, 3)).toEqual(true);
  expect(Condition(5, 6, 3, 7)).toEqual(false);
});
