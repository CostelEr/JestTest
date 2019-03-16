import { X } from "./39";

test("should return correct results", () => {
  expect(X(3, -27, 60)).toEqual([4, 5]);
  expect(X(1, -4, 3)).toEqual([1, 3]);
  expect(X(4, -4, -24)).toEqual([-2, 3]);
});
