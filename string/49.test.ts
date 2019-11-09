import { F } from "./49";
test("should return correct results", () => {
  expect(F("COTIC   CATORJNIC")).toEqual(".OTIC   .ATORJNIC");
  expect(F(" TARACAN CAMENSHIC ALIMANAH TREPET ACTRISA CATOLIC  ")).toEqual(
    " TARACAN .AMENSHIC ALIMANAH .REPET .CTRISA .ATOLIC  "
  );
  expect(F("RASTRATA  NASTROISHIC")).toEqual("R.STR.TA  NASTROISHIC");
});
