import { F } from "./10";

test("should return correct results", () => {
  expect(F(22, 21)).toEqual([43, 43]);
  expect(F(38, 13)).toEqual([51, 51]);
  expect(F(13, 45)).toEqual([58, 58]);
  expect(F(13, 13)).toEqual([0, 0]);
});
