import { F } from "./30";
test("should return correct results", () => {
  expect(F(874)).toEqual("three-digit even number");
  expect(F(22)).toEqual("two-digit even number");
  expect(F(25)).toEqual("two-digit odd number");
  expect(F(6)).toEqual("one-digit even number");
});
