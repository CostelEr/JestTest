import { F } from "./13";
test("should return correct results", () => {
  expect(F(1.68884)).toEqual([3, 1.83333]);
  expect(F(2.05865)).toEqual([4, 2.08333]);
  expect(F(2.59837)).toEqual([8, 2.71786]);
  expect(F(3.53869)).toEqual([19, 3.54774]);
  expect(F(4.75187)).toEqual([65, 4.75928]);
});
