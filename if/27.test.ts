import { F } from "./27";
test("should return correct results", () => {
  expect(F(18.72)).toEqual(1);
  expect(F(17)).toEqual(-1);
  expect(F(12.42)).toEqual(1);
  expect(F(15.5)).toEqual(-1);
  expect(F(-7.24)).toEqual(0);
  expect(F(0)).toEqual(1);
});
