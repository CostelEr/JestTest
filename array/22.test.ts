import { F } from "./22";
test("should return correct results", () => {
  expect(F(9, [6.5, 6.4, 0.6, 5.1, 7.7, 1.9, 4.3, 9.4, 6.3], 4, 9)).toEqual(
    13.5
  );
});
