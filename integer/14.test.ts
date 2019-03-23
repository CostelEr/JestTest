import { LR } from "./14";

test("should return correct results", () => {
  expect(LR(776)).toEqual(677);
  expect(LR(131)).toEqual(113);
  expect(LR(352)).toEqual(235);
});
