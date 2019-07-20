import { F } from "./23";
test("should return correct results", () => {
  expect(F(3, [7.3, 9.7, 4.5], 3, 3)).toEqual(8.5);
  expect(F(7, [3.4, 8.9, 5.3, 1.3, 3.7, 2.2, 0.2], 4, 7)).toEqual(5.87);
  expect(F(7, [9.7, 3.1, 8, 4, 3.7, 8.5, 6.1], 3, 4)).toEqual(6.22);
});
