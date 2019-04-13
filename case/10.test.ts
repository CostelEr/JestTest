import { F } from "./10";
test("should return correct results", () => {
  expect(F("W", 1)).toEqual("S");
  expect(F("S", -1)).toEqual("W");
  expect(F("N", -1)).toEqual("E");
});
