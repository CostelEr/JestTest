import { Condition } from "./36";

test("should return correct results", () => {
  expect(Condition(8, 8, 6, 8)).toEqual(true);
  expect(Condition(5, 6, 3, 6)).toEqual(true);
  expect(Condition(6, 7, 8, 3)).toEqual(false);
});
