import { F } from "./51";
test("should return correct results", () => {
  expect(
    F(5, [6.46, -5.67, 4.58, -5.85, 1.97], [1.3, 3.57, -1.46, -7.86, -4.87])
  ).toEqual([
    [1.3, 3.57, -1.46, -7.86, -4.87],
    [6.46, -5.67, 4.58, -5.85, 1.97]
  ]);

  expect(
    F(
      7,
      [7.03, 9.88, 5.48, -4.75, -9.28, -3.16, 7.22],
      [-7.3, 3.16, -0.81, 2.83, -7.79, 3.41, -5.59]
    )
  ).toEqual([
    [-7.3, 3.16, -0.81, 2.83, -7.79, 3.41, -5.59],
    [7.03, 9.88, 5.48, -4.75, -9.28, -3.16, 7.22]
  ]);
});
