import { F } from "./52";
test("should return correct results", () => {
  expect(
    F("Ne usmatrivaite zlovogo umisla v tom, cito vpolne obiasnimo glupostiu.")
  ).toEqual(
    "Ne Usmatrivaite Zlovogo Umisla V Tom, Cito Vpolne Obiasnimo Glupostiu."
  );
  expect(
    F(
      "Kto mojet - delaet, kto ne mojet - ucit, kto ne mojet uciti - upravleaet."
    )
  ).toEqual(
    "Kto Mojet - Delaet, Kto Ne Mojet - Ucit, Kto Ne Mojet Uciti - Upravleaet."
  );
  expect(F("Citobi odno ocistiti, nujno drugoe zapacikati")).toEqual(
    "Citobi Odno Ocistiti, Nujno Drugoe Zapacikati"
  );
});
