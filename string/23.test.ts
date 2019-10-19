import { F } from "./23";
test("should return correct results", () => {
  expect(F("6+4+7-3+8+2")).toEqual(24);
  expect(F("2-3+3+0+2")).toEqual(4);
  expect(F("4")).toEqual(4);
  expect(F("1-9+6-0-6")).toEqual(-8);
});
