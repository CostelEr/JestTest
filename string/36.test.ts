import { F } from "./36";
test("should return correct results", () => {
  expect(F("fhijnXDFrIU9p2IU9p2Ozq4IU9p2u", "IU9p2", "HZ4")).toEqual(
    "fhijnXDFrHZ4IU9p2Ozq4IU9p2u"
  );
  expect(F("ibLpAOod9YLpAOoLIRZLpAOosVP", "LpAOo", "sPwa")).toEqual(
    "ibsPwad9YLpAOoLIRZLpAOosVP"
  );
  expect(
    F("XTfgzJeMdgzJeMAsqzJeMmmLgzJeMF75EgzJeMFv", "gzJeM", "4eQR")
  ).toEqual("XTf4eQRdgzJeMAsqzJeMmmLgzJeMF75EgzJeMFv");
});
