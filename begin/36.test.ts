import { Distance } from "./36";

test("should return correct results", () => {
  expect(Distance(60, 80, 120, 4)).toEqual(680);
  expect(Distance(70, 50, 150, 2)).toEqual(390);
});
