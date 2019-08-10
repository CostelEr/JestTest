import { F } from "./44";
test("should return correct results", () => {
  expect(F(7, [2, 3, 3, 5, 6, 7, 8])).toEqual([2, 3]);
  expect(F(9, [778, 773, 860, 851, 773, 496, 987, 816, 526])).toEqual([2, 5]);
  expect(F(10, [585, 685, 724, 724, 290, 925, 157, 771, 504, 445])).toEqual([
    3,
    4
  ]);
  expect(F(7, [266, 634, 682, 710, 616, 564, 266])).toEqual([1, 7]);
});
