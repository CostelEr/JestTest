import { TH } from "./15";

test("should return correct results", () => {
  expect(TH(779)).toEqual(779);
  expect(TH(423)).toEqual(243);
  expect(TH(471)).toEqual(741);
});
