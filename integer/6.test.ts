import { ZU } from "./6";

test("should return correct results", () => {
  expect(ZU(64)).toEqual([6, 4]);
  expect(ZU(26)).toEqual([2, 6]);
  expect(ZU(59)).toEqual([5, 9]);
});
