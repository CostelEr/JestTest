import { Hours } from "./20";

test("should return correct results", () => {
  expect(Hours(20419)).toEqual(5);
  expect(Hours(2143)).toEqual(0);
  expect(Hours(16367)).toEqual(4);
});
