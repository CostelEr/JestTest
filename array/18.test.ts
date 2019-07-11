import { F } from "./18";
test("should return correct results", () => {
  expect(F([52, 90, 94, 81, 57, 80, 36, 53, 96, 46])).toEqual(36);
  expect(F([55, 23, 74, 44, 87, 36, 79, 82, 36, 26])).toEqual(23);
  expect(F([62, 66, 80, 42, 52, 56, 88, 46, 66, 22])).toEqual(0);
});
