import { F } from "./50";
test("should return correct results", () => {
  expect(F("   COTIC   CATORJNIC   ")).toEqual("CATORJNIC COTIC");
  expect(F("   COTIC   ")).toEqual("COTIC");
  expect(F("  PODSTUP ACSACAL  CULITURIST  ")).toEqual(
    "CULITURIST ACSACAL PODSTUP"
  );
  expect(F("COTIC   MAXIMUM DISTIPLINA   CVADRATURA")).toEqual(
    "CVADRATURA DISTIPLINA MAXIMUM COTIC"
  );
  expect(F("ALIMANAH OKO   ZAKLADKA PARAGRAF  KOZIREK ")).toEqual(
    "KOZIREK PARAGRAF ZAKLADKA OKO ALIMANAH"
  );
});
