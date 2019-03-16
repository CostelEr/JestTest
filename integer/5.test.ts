import { Rest } from "./5";

test("should return correct results", () => {
  expect(Rest(69, 9)).toEqual(6);
  expect(Rest(55, 16)).toEqual(7);
  expect(Rest(42, 16)).toEqual(10);
});
