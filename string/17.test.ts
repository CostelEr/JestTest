import { F } from "./17";
test("should return correct results", () => {
  expect(F("3M5дмгоКО7лNOacLьsAф")).toEqual("3M5ДМГОКО7ЛNOACLЬSAФ");
  expect(F("3tlVGQдuъiSыjkRЭZЯЧНх5")).toEqual("3TLVGQДUЪISЫJKRЭZЯЧНХ5");
  expect(F("OjdД1IT81gpлнz1ezьД")).toEqual("OJDД1IT81GPЛНZ1EZЬД");
});
