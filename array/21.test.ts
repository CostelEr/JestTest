import { F } from "./21";
test("should return correct results", () => {
  expect(F(6, [3.8, 5.2, 5.9, 1, 6.7, 4.2], 6, 6)).toEqual(4.2);
  expect(
    F(10, [4.5, 2.7, 5.4, 0.2, 7.8, 3.3, 8.6, 9.3, 5.5, 1.8], 7, 8)
  ).toEqual(8.95);
  expect(F(5, [8.8, 7.5, 4.5, 3.4, 1], 2, 2)).toEqual(7.5);
  expect(F(6, [0.9, 5, 8.6, 2.6, 9.8, 4.3], 3, 6)).toEqual(6.33);
});
