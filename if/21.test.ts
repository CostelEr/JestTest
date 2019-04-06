import { F } from "./21";

test("should return correct results", () => {
  expect(F(-1, -1)).toEqual(3);
  expect(F(4, -5)).toEqual(3);
  expect(F(1, -1)).toEqual(3);
  expect(F(0, 0)).toEqual(0);
  expect(F(1, 0)).toEqual(1);
  expect(F(-2, 0)).toEqual(1);
  expect(F(0, -4)).toEqual(2);
});
