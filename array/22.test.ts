import { F } from "./22";
test("should return correct results", () => {
  expect(F(9, [6.5, 6.4, 0.6, 5.1, 7.7, 1.9, 4.3, 9.4, 6.3], 4, 9)).toEqual(
    13.5
  );
  expect(F(5, [2.3, 5.2, 5.7, 5.3, 4], 5, 5)).toEqual(18.5);
  expect(F(7, [2.7, 2.5, 6.1, 2.3, 6.5, 4.9, 6.6], 4, 7)).toEqual(11.3);
});
