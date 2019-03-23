import { AreaRect } from "./29";

test("should return correct results", () => {
  expect(AreaRect(58, 59, 7)).toEqual([64, 286]);
  expect(AreaRect(19, 22, 3)).toEqual([42, 40]);
  expect(AreaRect(54, 15, 11)).toEqual([4, 326]);
});
