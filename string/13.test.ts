import { F } from "./13";
test("should return correct results", () => {
  expect(F("Ч6Оey1цеЙvYPмzпgЫ")).toEqual(2);
  expect(F("жаrИчэЮзNP6ю3бhиXdтЮnT30к")).toEqual(4);
  expect(F("2ОзафоРмИ85кГхNYЯзвЧЛ")).toEqual(3);
});
