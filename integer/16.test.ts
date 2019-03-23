import { OT } from "./16";

test("should return correct results", () => {
  expect(OT(891)).toEqual(819);
  expect(OT(879)).toEqual(897);
  expect(OT(106)).toEqual(160);
});
