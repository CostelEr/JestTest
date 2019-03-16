import { Change } from "./8";

test("should return correct results", () => {
  expect(Change(81)).toEqual(18);
  expect(Change(75)).toEqual(57);
  expect(Change(17)).toEqual(71);
});
