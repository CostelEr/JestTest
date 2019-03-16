import { Distance } from "./37";

test("should return correct results", () => {
  expect(Distance(60, 80, 120, 4)).toEqual(440);
  expect(Distance(80, 70, 90, 3)).toEqual(360);
  expect(Distance(50, 50, 200, 4)).toEqual(200);
});
