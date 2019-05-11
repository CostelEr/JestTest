import { F } from "./27";
test("should return correct results", () => {
  expect(F(-0.50200979, 4)).toEqual(-0.52590682);
  expect(F(0.67147015, 5)).toEqual(0.736036);
  expect(F(0.58895906, 7)).toEqual(0.62976818);
});
