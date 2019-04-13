import { F } from "./11";
test("should return correct results", () => {
  expect(F("E", 2, 1)).toEqual("S");
  expect(F("S", 1, 2)).toEqual("W");
  expect(F("E", -1, 2)).toEqual("N");
});
