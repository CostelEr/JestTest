import { Century } from "./30";

test("should return correct results", () => {
  expect(Century(1901)).toEqual(20);
  expect(Century(2365)).toEqual(24);
  expect(Century(687)).toEqual(7);
});
