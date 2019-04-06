import { F } from "./26";
test("should return correct results", () => {
  expect(F(7.02)).toEqual(4.0);
  expect(F(1.37)).toEqual(1.88);
  expect(F(1.5)).toEqual(2.25);
  expect(F(-3.38)).toEqual(3.38);
});
