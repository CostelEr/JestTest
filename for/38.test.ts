import { F } from "./38";
test("should return correct results", () => {
  expect(F(4)).toEqual(22);
  expect(F(1)).toEqual(1);
  expect(F(2)).toEqual(3);
  expect(F(10)).toEqual(49863);
});
