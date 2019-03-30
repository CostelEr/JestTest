import { Condition } from "./26";

test("should return correct results", () => {
  expect(Condition(4.97, -5.91)).toEqual(true);
  expect(Condition(1.25, 5.86)).toEqual(false);
  expect(Condition(8.54, 1.91)).toEqual(false);
});
