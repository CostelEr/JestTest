import { F } from "./20";
test("should return correct results", () => {
  expect(F(4, [1.5, 4.1, 0.9, 3.2], 1, 4)).toEqual(9.7);
  expect(F(9, [8.6, 2.3, 4.2, 4.7, 2.8, 7.2, 4.5, 3.1, 3.5], 4, 6)).toEqual(
    14.7
  );
  expect(F(6, [3.8, 5.2, 5.9, 1, 6.7, 4.2], 6, 6)).toEqual(4.2);
});
