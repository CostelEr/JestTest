import { Metri } from "./1";

test("should return correct results", () => {
  expect(Metri(8570)).toEqual(85);
  expect(Metri(5558)).toEqual(55);
});
