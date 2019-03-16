import { KB } from "./3";

test("should return correct results", () => {
  expect(KB(2023)).toEqual(1);
  expect(KB(3448)).toEqual(3);
});
