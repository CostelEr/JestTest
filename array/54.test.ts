import { F } from "./54";
test("should return correct results", () => {
  expect(F(3, [-91, -52, 91])).toEqual([1, [-52]]);
  expect(F(7, [-86, -75, 83, -93, 66, -97, 4])).toEqual([3, [-86, 66, 4]]);
  expect(F(9, [20, -67, -90, 98, -63, -40, 29, 55, -43])).toEqual([
    4,
    [20, -90, 98, -40]
  ]);
});
