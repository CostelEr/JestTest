import { F } from "./39";
test("should return correct results", () => {
  expect(
    F(9, [-8.99, 8.71, -3.4, 7.94, 7.53, -0.65, -8.32, 3.81, 3.41])
  ).toEqual(6);
  expect(F(6, [3.93, -4.64, -7.19, 9.76, 9.37, -4.74])).toEqual(3);
  expect(F(6, [8.37, 2.18, 6.21, 9.43, 6.34, 6.51])).toEqual(4);
});
