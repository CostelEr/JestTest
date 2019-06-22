import { F } from "./19";
test("should return correct results", () => {
  expect(F(37)).toEqual(73);
  expect(F(15660)).toEqual(6651);
  expect(F(20622)).toEqual(22602);
  expect(F(8530)).toEqual(358);
  expect(F(8852)).toEqual(2588);
});
