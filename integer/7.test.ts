import { SP } from "./7";

test("should return correct results", () => {
  expect(SP(64)).toEqual([10, 24]);
  expect(SP(99)).toEqual([18, 81]);
  expect(SP(57)).toEqual([12, 35]);
});
