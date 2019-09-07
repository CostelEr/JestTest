import { F } from "./92";
test("should return correct results", () => {
  expect(F(9, [-79, -16, -26, 7, -46, 60, -44, -18, 97])).toEqual([
    6,
    [-16, -26, -46, 60, -44, -18]
  ]);
});
