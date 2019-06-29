import { F } from "./30";
test("should return correct results", () => {
  expect(F(20.94, 43.36, 4.58)).toEqual(36);
  expect(F(27.35, 45.67, 2.69)).toEqual(160);
  expect(F(32.95, 48.76, 5.97)).toEqual(40);
});
