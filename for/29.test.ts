import { F } from "./29";
test("should return correct results", () => {
  expect(F(8, 0.1, 1.9)).toEqual([
    0.225,
    0.1,
    0.325,
    0.55,
    0.775,
    1,
    1.225,
    1.45,
    1.675,
    1.9
  ]);
  expect(F(5, 5.4, 8.8)).toEqual([0.68, 5.4, 6.08, 6.76, 7.44, 8.12, 8.8]);
});
