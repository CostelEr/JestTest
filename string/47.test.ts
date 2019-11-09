import { F } from "./47";
test("should return correct results", () => {
  expect(F("   PROTIVOGAZ BARABAN PRINTIP    ")).toEqual(
    "PROTIVOGAZ.BARABAN.PRINTIP"
  );
  expect(
    F("CATORJNIC PRINTIP PARAGRAF  PARICMAHER     AZBUKA AZBUKA PRINTIP")
  ).toEqual("CATORJNIC.PRINTIP.PARAGRAF.PARICMAHER.AZBUKA.AZBUKA.PRINTIP");
  expect(F("  CAMENSIK   NARODNOSTI    ZAPEVALA")).toEqual(
    "CAMENSIK.NARODNOSTI.ZAPEVALA"
  );
});
