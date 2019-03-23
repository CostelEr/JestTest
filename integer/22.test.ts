import { Last } from "./22";

test("should return correct results", () => {
  expect(Last(20881)).toEqual(2881);
  expect(Last(495)).toEqual(495);
  expect(Last(374)).toEqual(374);
  expect(Last(4031)).toEqual(431);
});
