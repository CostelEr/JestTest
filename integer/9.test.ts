import { Sute } from "./9";

test("should return correct results", () => {
  expect(Sute(482)).toEqual(4);
  expect(Sute(155)).toEqual(1);
  expect(Sute(752)).toEqual(7);
});
