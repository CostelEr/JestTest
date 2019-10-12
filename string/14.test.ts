import { F } from "./14";
test("should return correct results", () => {
  expect(F("сщиzRыAЖKzGэещЫshЪpQHьCшмKHd")).toEqual(9);
  expect(F("9VЗEъюуДм0uV4КBД5о")).toEqual(4);
  expect(F("SoI0цiэкВJЯwHEVА4Д1хаИ")).toEqual(6);
});
