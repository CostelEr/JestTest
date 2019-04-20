import { F } from "./20";
test("should return correct results", () => {
  expect(F(27, 6)).toEqual("Cancer");
  expect(F(4, 12)).toEqual("Sagittarius");
  expect(F(25, 6)).toEqual("Cancer");
  expect(F(18, 12)).toEqual("Sagittarius");
  expect(F(24, 12)).toEqual("Capricorn");
});
