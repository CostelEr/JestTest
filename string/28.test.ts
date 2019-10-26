import { F } from "./28";
test("should return correct results", () => {
  expect(F("w", "wywzE4wjwua")).toEqual("wwywwzE4wwjwwua");
  expect(F("C", "C2CTCxCO")).toEqual("CC2CCTCCxCCO");
  expect(F("w", "qiw4wwfJw")).toEqual("qiww4wwwwfJww");
});
