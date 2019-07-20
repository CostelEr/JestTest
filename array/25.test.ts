import { F } from "./25";
test("should return correct results", () => {
  expect(F(8, [5, 15, 45, 135, 405, 1215, 3645, 10935])).toEqual(3);
  expect(F(8, [6, 14, 24, 48, 96, 192, 384, 768])).toEqual(0);
  expect(F(10, [6, 6, 6, 6, 6, 6, 6, 6, 6, 6])).toEqual(1);
});
