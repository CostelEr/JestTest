import { Condition } from "./24";

test("should return correct results", () => {
  expect(Condition(-5.8, -0.96, -4.44)).toEqual(false);
  expect(Condition(-4.25, -7.88, 3.06)).toEqual(true);
});
