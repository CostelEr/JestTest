import { F } from "./46";
test("should return correct results", () => {
  expect(F("PROTIVOGAZ BARABAN PRINTIP")).toEqual(10);
  expect(F("CAMENSIK ACTRISA ZAKLADKA")).toEqual(8);
  expect(F("RASPRAVA CLINOK PANORAMA CUZNECIC KVADRATURA ZAKLADKA")).toEqual(
    10
  );
  expect(F("C SS")).toEqual(2);
});
