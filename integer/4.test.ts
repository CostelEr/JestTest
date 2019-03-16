import { BinA } from "./4";

test("should return correct results", () => {
  expect(BinA(69, 9)).toEqual(7);
  expect(BinA(67, 3)).toEqual(22);
  expect(BinA(45, 18)).toEqual(2);
});
