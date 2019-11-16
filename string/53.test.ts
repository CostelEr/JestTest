import { F } from "./53";
test("should return correct results", () => {
  expect(F("Citobi odno ocistiti, nujno drugoe zapacikati")).toEqual(1);
  expect(
    F(
      "Obshaia summa razuma na planete - velicina postoiannaia, a naselenie rastet."
    )
  ).toEqual(3);
  expect(
    F("Liubie predlojenia liudi ponimaiut inace, cem te kto ih vnosit.")
  ).toEqual(2);
});
