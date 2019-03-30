import { Condition } from "./22";

test("should return correct results", () => {
  expect(Condition(169)).toEqual(true);
  expect(Condition(774)).toEqual(false);
  expect(Condition(369)).toEqual(true);
  expect(Condition(189)).toEqual(true);
  expect(Condition(410)).toEqual(true);
});
