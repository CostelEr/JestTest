import { F } from "./45";
test("should return correct results", () => {
  expect(F("CRANOVSCIC BALAGAN   ZAJIGALKA BARABAN")).toEqual(7);
  expect(F("RUPOR  PARAGRAF")).toEqual(5);
  expect(
    F("PARICMAHER AKSAKAL ASSIGNATIA SUFFIX ARBA CRANOVSHIC OPLOSNOSTI")
  ).toEqual(4);
  expect(F("CUBIC ACT RISA TURIS QT")).toEqual(2);
});
