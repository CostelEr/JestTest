import { Condition } from "./25";

test("should return correct results", () => {
  expect(Condition(3.46, 6.92)).toEqual(false);
  expect(Condition(-6, 2.99)).toEqual(true);
  expect(Condition(-0.75, 1.11)).toEqual(true);
});
