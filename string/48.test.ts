import { F } from "./48";
test("should return correct results", () => {
  expect(F("  CAMENSIC   NARODNOSTI    ZAPEVALA")).toEqual(
    "  CAMENSI.   NAROD.OSTI    ZAPEVALA"
  );
  expect(F("TRACT  CULIC")).toEqual("TRAC.  CULI.");
  expect(F("AAAAAAA  BBBB")).toEqual("A......  B...");
  expect(F("DIAFRAGMA  SUFFICS PICAP ATMOSFERA")).toEqual(
    "DIAFRAGMA  SUFFIC. PICA. ATMOSFER."
  );
  expect(
    F("CULITURIST RASTVOR OSLOJNENIE ZAPEVALA ARMATURA ASSIGNATIE")
  ).toEqual("CULITURIST RASTVO. OSL.JNENIE ZAPEVALA ARM.TUR. ASSIGN.TIE");
});
