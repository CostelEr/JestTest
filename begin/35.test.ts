import { Distance } from "./35";

test("should return correct results", () => {
  expect(Distance(6, 1, 4, 4)).toEqual(44);
  expect(Distance(5, 2, 2, 3)).toEqual(19);
});
