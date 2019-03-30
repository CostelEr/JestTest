import { Condition } from "./27";

test("should return correct results", () => {
  expect(Condition(-5.37, 7.08)).toEqual(true);
  expect(Condition(8.08, 3.19)).toEqual(false);
  expect(Condition(-2.85, -8.12)).toEqual(true);
});
