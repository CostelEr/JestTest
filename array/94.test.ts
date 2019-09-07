import { F } from "./94";
test("should return correct results", () => {
  expect(F(5, [70, -29, -50, 98, -73])).toEqual([-29, 98]);
  expect(F(10, [-11, 26, -76, 51, -40, -73, -75, 67, -23, -99])).toEqual([
    26,
    51,
    -73,
    67,
    -99
  ]);
  expect(F(3, [3, 55, -38])).toEqual([55]);
});
