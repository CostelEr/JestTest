import { F } from "./41";
test("should return correct results", () => {
  expect(F(4, [0.48, 5.22, -0.08, 4.7])).toEqual([0.48, 5.22]);
  expect(F(4, [-9.21, 3.84, -1.35, -7.82])).toEqual([3.84, -1.35]);
});
