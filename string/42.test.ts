import { F } from "./42";
test("should return correct results", () => {
  expect(F("OTSTALOSTI   RUPOR")).toEqual(1);
  expect(F("MINIMUM  CRANOVSHIC CHIVOC ASIGNATIE COMBINATIE   TURIST")).toEqual(
    4
  );
  expect(F("MINIMT   ")).toEqual(0);
});
