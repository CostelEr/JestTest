import { F } from "./44";
test("should return correct results", () => {
  expect(F("CRANOVSCIC BALAGAN   ZAJIGALKA BARABAN")).toEqual(3);
  expect(F("ZABAVA  CATOLIC")).toEqual(1);
  expect(F("CUBIC ACTRISA TURIST CARAVAN")).toEqual(1);
  expect(F("CUBIC ACTRISA TURIST")).toEqual(0);
});
