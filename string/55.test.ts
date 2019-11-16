import { F } from "./55";
test("should return correct results", () => {
  expect(F("Citobi odno ocistiti, nujno drugoe zapacikati.")).toEqual(
    "zapacikati"
  );
  expect(
    F(
      "Iz vseh nepriatnostei, proizoidiot imenno ta, usherb ot kotoroi bolishe."
    )
  ).toEqual("nepriatnostei");
  expect(
    F(
      "Esli rabota provalivaetsea, to vseakaia popitka ee spasti uhudshit delo."
    )
  ).toEqual("provalivaetsea");
});
