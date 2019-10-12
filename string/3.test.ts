import { F } from "./3";
test("should return correct results", () => {
  expect(F("G")).toEqual("FH");
  expect(F("@")).toEqual("?A");
  expect(F("9")).toEqual("8:");
});
