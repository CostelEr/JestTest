import { F } from "./56";
test("should return correct results", () => {
  expect(F(4, [-60, 92, 54, -68])).toEqual([1, [54]]);
  expect(F(3, [-60, 92, 54])).toEqual([1, [54]]);
  expect(F(9, [-71, -94, 66, 82, 83, 31, -91, -49, 77])).toEqual([
    3,
    [66, 31, 77]
  ]);
});
