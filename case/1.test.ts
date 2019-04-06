import { F } from "./1";
test("should return correct results", () => {
  expect(F(1)).toEqual("Monday");
  expect(F(7)).toEqual("Sunday");
});
