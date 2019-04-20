import { F } from "./19";
test("should return correct results", () => {
  expect(F(1984)).toEqual("The Green Rat's year");
  expect(F(1898)).toEqual("The Yellow Dog's year");
  expect(F(1938)).toEqual("The Red Tiger's year");
});
