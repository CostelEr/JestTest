import { SP } from "./11";

test("should return correct results", () => {
  expect(SP(284)).toEqual([14, 64]);
  expect(SP(586)).toEqual([19, 240]);
});
