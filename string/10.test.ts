import { F } from "./10";
test("should return correct results", () => {
  expect(F("FnCQA")).toEqual("AQCnF");
  expect(F("huaъаИ")).toEqual("Иаъauh");
  expect(F("ШtpeMfa6ЙТбЙZЙcvз")).toEqual("зvcЙZЙбТЙ6afMeptШ");
});
