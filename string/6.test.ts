import { F } from "./6";
test("should return correct results", () => {
  expect(F("6")).toEqual("digit");
  expect(F("C")).toEqual("capital");
  expect(F("t")).toEqual("small");
  expect(F("Ш")).toEqual("rus");
});
