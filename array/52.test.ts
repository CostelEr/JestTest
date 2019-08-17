import { F } from "./52";
test("should return correct results", () => {
  expect(F(6, [8.2, 9.5, 6.5, 1.9, 2.1, 0.9])).toEqual([
    4.1,
    4.75,
    3.25,
    3.8,
    4.2,
    1.8
  ]);
  expect(F(6, [5.1, 7.4, 6.5, 6, 3.8, 7.8])).toEqual([
    2.55,
    3.7,
    3.25,
    3,
    7.6,
    3.9
  ]);
  expect(F(3, [8.6, 8.2, 6.2])).toEqual([4.3, 4.1, 3.1]);
});
