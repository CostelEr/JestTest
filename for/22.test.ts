import { F } from "./22";
test("should return correct results", () => {
  expect(F(-0.44109754, 4)).toEqual(0.64345949);
  expect(F(1.98364483, 1)).toEqual(2.98364483);
  expect(F(1.97892755, 2)).toEqual(4.93700467);
});
