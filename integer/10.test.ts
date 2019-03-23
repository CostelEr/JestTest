import { ZU } from "./10";

test("should return correct results", () => {
  expect(ZU(896)).toEqual([6, 9]);
  expect(ZU(259)).toEqual([9, 5]);
  expect(ZU(850)).toEqual([0, 5]);
});
