import { F } from "./57";
test("should return correct results", () => {
  expect(F("Citobi   odno ocistiti,   nujno drugoe  zapacikati.  ")).toEqual(
    "Citobi odno ocistiti, nujno drugoe zapacikati."
  );

  expect(
    F("   Stoit    vam toliko vimiti   mashinu, kak tut   je poidet dojdi.  ")
  ).toEqual("Stoit vam toliko vimiti mashinu, kak tut je poidet dojdi.");

  expect(F("Hoceshi   jiti v soglasii   - soglashaisea.  ")).toEqual(
    "Hoceshi jiti v soglasii - soglashaisea."
  );
});
