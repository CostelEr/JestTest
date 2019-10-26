import { F } from "./31";
test("should return correct results", () => {
  expect(F("gA1TRimHjaNyebom98F2", "Nyebo")).toEqual(true);
  expect(F("yPp0IsHt51XsxRhyaB19Fz", "fVnfx")).toEqual(false);
  expect(F("1ewWpnssdcnSHvychebY", "wWpns")).toEqual(true);
});
