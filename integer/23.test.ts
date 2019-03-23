import { Last } from "./23";

test("should return correct results", () => {
  expect(Last(27630)).toEqual(40);
  expect(Last(3177)).toEqual(52);
  expect(Last(28487)).toEqual(54);
});
