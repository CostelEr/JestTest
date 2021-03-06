import { F } from "./53";
test("should return correct results", () => {
  expect(
    F(
      8,
      [-2.83, -2.52, 4.35, 7.04, 3.77, -3.73, 2.29, -5.63],
      [2.95, 9.22, -9.17, 0.77, -7.64, -7.29, 8.07, -1.25]
    )
  ).toEqual([2.95, 9.22, 4.35, 7.04, 3.77, -3.73, 8.07, -1.25]);

  expect(F(3, [5, 0.13, 4.73], [-3.68, 2.16, -7.13])).toEqual([5, 2.16, 4.73]);
});
