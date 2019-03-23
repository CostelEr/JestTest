import { Positive } from "./1";

test("should return correct results", () => {
  expect(Positive(14)).toEqual(true);
  expect(Positive(23)).toEqual(true);
  expect(Positive(0)).toEqual(false);
  expect(Positive(-29)).toEqual(false);
});
