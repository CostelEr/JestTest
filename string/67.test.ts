import { F } from "./67";
test("should return correct results", () => {
  expect(F("трно сганхдш  олде амн.еаркмнеспвьиоа девеняеУ")).toEqual(
    "Утерянное всегда находишь в последнем кармане."
  );
  expect(F("зея ирмто;омчймлм туа ооо.мрптйбро;ое ает мреокмйрмИ")).toEqual(
    "Измеряй микрометром; отмечай мелом; отрубай топором."
  );
  expect(
    F("сивмверво д ынхдтс,заи ын алдлс.ьииубзе втчн ьеиоа вег,на с а лЕ")
  ).toEqual("Если вам все равно, где вы находитесь, значит вы не заблудились.");
  expect(F("аодхн")).toEqual("наход");
});