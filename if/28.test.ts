import { F } from "./28";
test("should return correct results", () => {
  expect(F(16)).toEqual(366);
  expect(F(300)).toEqual(365);
  expect(F(800)).toEqual(366);
  expect(F(154)).toEqual(365);
  expect(F(2200)).toEqual(365);
  expect(F(1600)).toEqual(366);
});
