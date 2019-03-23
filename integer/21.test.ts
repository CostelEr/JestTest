import { Last } from "./21";

test("should return correct results", () => {
  expect(Last(13506)).toEqual(6);
  expect(Last(21820)).toEqual(40);
  expect(Last(10876)).toEqual(16);
});
