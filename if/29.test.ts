import { F } from "./29";
test("should return correct results", () => {
  expect(F(0)).toEqual("zero number");
  expect(F(27)).toEqual("positive odd number");
  expect(F(-34)).toEqual("negative even number");
});
