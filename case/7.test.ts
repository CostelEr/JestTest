import { F } from "./7";
test("should return correct results", () => {
  expect(F(5, 9.06)).toEqual(906);
  expect(F(2, 1.74)).toEqual(0.00000174);
  expect(F(4, 1.3)).toEqual(1300);
  expect(F(3, 5.22)).toEqual(0.00522);
  expect(F(1, 4.5)).toEqual(4.5);
});
