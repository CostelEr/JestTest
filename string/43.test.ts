import { F } from "./43";
test("should return correct results", () => {
  expect(F("OTSTALOSTI   RUPOR")).toEqual(1);
  expect(F("CABLUC   COLPAC")).toEqual(2);
  expect(F("ACUSTICA  ACUSTICA ALICIA CUSOC COTIC COMPILETOR")).toEqual(3);
  expect(F("CRANOVSCIC BALAGAN   ZAJIGALKA BARABAN")).toEqual(4);
});
