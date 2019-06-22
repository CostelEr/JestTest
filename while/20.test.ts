import { F } from "./20";
test("should return correct results", () => {
  expect(F(396)).toEqual(false);
  expect(F(283)).toEqual(true);
  expect(F(833)).toEqual(false);
  expect(F(272)).toEqual(true);
  expect(F(2)).toEqual(true);
});
