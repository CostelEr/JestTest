import { F } from "./25";
test("should return correct results", () => {
  expect(F("720")).toEqual("1011010000");
  expect(F("782")).toEqual("1100001110");
  expect(F("301")).toEqual("100101101");
});
