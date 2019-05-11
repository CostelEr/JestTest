import { F } from "./30";
test("should return correct results", () => {
  expect(F(4, 4.71, 6.28)).toEqual([
    0.3925,
    2,
    1.92487,
    1.70907,
    1.38544,
    1.00319
  ]);
  expect(F(3, 0, 1.57)).toEqual([0.52333, 1, 0.50023, 0.13424, 0]);
});
