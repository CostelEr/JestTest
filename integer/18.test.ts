import { Mii } from "./18";

test("should return correct results", () => {
  expect(Mii(10165)).toEqual(0);
  expect(Mii(30503)).toEqual(0);
  expect(Mii(21796)).toEqual(1);
  expect(Mii(5127)).toEqual(5);
  expect(Mii(20518)).toEqual(0);
});
