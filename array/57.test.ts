import { F } from "./57";
test("should return correct results", () => {
  expect(F(10, [5, -66, 28, -5, 30, -79, 40, 8, -17, 14])).toEqual([
    -66,
    -5,
    -79,
    8,
    14,
    5,
    28,
    30,
    40,
    -17
  ]);
  expect(F(9, [-5, -46, 53, -5, -67, 75, -87, -7, 53])).toEqual([
    -46,
    -5,
    75,
    -7,
    -5,
    53,
    -67,
    -87,
    53
  ]);
  expect(F(8, [-81, -14, 15, -35, 44, 54, 57, 37])).toEqual([
    -14,
    -35,
    54,
    37,
    -81,
    15,
    44,
    57
  ]);
});
