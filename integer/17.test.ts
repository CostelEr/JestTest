import { Sute } from "./17";

test("should return correct results", () => {
  expect(Sute(10165)).toEqual(1);
  expect(Sute(30503)).toEqual(5);
  expect(Sute(21796)).toEqual(7);
});
