import { F } from "./41";
test("should return correct results", () => {
  expect(F("iJ6DVG9EP   TViP3XeG1j9wGfP ")).toEqual(2);
  expect(F("  ")).toEqual(0);
  expect(F("clinok   paragraf amplituda  colpak     acustica   ")).toEqual(5);
  expect(F("otstalosti scarlatina  arba")).toEqual(3);
  expect(
    F("razlojenie minimum diafragma caricatura  pristup  rasprava cabluc ")
  ).toEqual(7);
});
