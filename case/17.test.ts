import { F } from "./17";
test("should return correct results", () => {
  expect(F(21)).toEqual("the twenty-one tasks");
  expect(F(13)).toEqual("the thirteenth tasks");
  expect(F(20)).toEqual("the twenty tasks");
  expect(F(39)).toEqual("the thirty-nine tasks");
});
