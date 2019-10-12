import { F } from "./11";
test("should return correct results", () => {
  expect(F("С1ИОХПЖ")).toEqual("С 1 И О Х П Ж");
  expect(F("WX8fHQaЮХ")).toEqual("W X 8 f H Q a Ю Х");
  expect(F("лgьsEьбNHUXAuУуцл")).toEqual("л g ь s E ь б N H U X A u У у ц л");
});
