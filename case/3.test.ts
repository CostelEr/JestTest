import { F } from "./3";
test("should return correct results", () => {
  expect(F(6)).toEqual("Summer");
  expect(F(12)).toEqual("Winter");
});
