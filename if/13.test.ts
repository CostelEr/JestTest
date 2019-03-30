import { F } from "./13";

test("should return correct results", () => {
  expect(F(-3.21, -6.75, 8.95)).toEqual(-3.21);
  expect(F(1.5, 6.37, -1.88)).toEqual(1.5);
  expect(F(-4.94, 8.7, 0.43)).toEqual(0.43);
  expect(F(6.64, -4.14, 3.75)).toEqual(3.75);
});
