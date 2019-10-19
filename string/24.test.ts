import { F } from "./24";
test("should return correct results", () => {
  expect(F("11011100")).toEqual("220");
  expect(F("1001000111")).toEqual("583");
  expect(F("11000101")).toEqual("197");
});
