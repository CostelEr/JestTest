import { F } from "./22";
test("should return correct results", () => {
  expect(F("27219")).toEqual(21);
  expect(F("21138")).toEqual(15);
  expect(F("3909")).toEqual(21);
});
