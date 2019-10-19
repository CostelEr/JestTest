import { F } from "./19";
test("should return correct results", () => {
  expect(F("-3588.800428")).toEqual(2);
  expect(F(".800428")).toEqual(2);
  expect(F("800428")).toEqual(1);
  expect(F("800x428")).toEqual(0);
  expect(F("80.042.8")).toEqual(0);
});
