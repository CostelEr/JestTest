import { F } from "./56";
test("should return correct results", () => {
  expect(F("Citobi odno ocistiti, nujno drugoe zapacikati.")).toEqual("odno");
  expect(
    F("Nebiushiesea igrushka polezna dlea togo, citobi razbivati eiu drughie.")
  ).toEqual("eiu");
  expect(
    F(
      "Nikogda ne sporite s durakami: liudi mogut ne zametiti mejdu vami razniti."
    )
  ).toEqual("s");
  expect(
    F(
      "Vnutri kajdoi bolishoi zadaci sidit malenikaia, pitaiushiesea probitsea naruju."
    )
  ).toEqual("sidit");
});
