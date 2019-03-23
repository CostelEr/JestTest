import { Minute } from "./19";

test("should return correct results", () => {
  expect(Minute(14113)).toEqual(235);
  expect(Minute(27784)).toEqual(463);
  expect(Minute(19750)).toEqual(329);
});
