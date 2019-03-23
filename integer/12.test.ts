import { Invers } from "./12";

test("should return correct results", () => {
  expect(Invers(284)).toEqual(482);
  expect(Invers(706)).toEqual(607);
  expect(Invers(915)).toEqual(519);
});
