import { F } from "./6";
test("should return correct results", () => {
  expect(F(41)).toEqual([49.2, 57.4, 65.6, 73.8, 82]);
  expect(F(99.1)).toEqual([118.92, 138.74, 158.56, 178.38, 198.2]);
});
