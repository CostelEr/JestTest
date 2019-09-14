import { F } from "./111";
test("should return correct results", () => {
  expect(F(9, [-79, -10, -56, -95, 36, -3, 54, -62, -6])).toEqual([
    -79,
    -79,
    -79,
    -10,
    -56,
    -95,
    -95,
    -95,
    36,
    -3,
    -3,
    -3,
    54,
    -62,
    -6
  ]);
});
