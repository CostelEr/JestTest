import { F } from "./35";
test("should return correct results", () => {
  expect(F("1ahavSdE0y68cE0y6CwKDR0y6hOg", "E0y6")).toEqual(
    "1ahavSd8cCwKDR0y6hOg"
  );
  expect(F("duUkS960ZTuSfZTuSdmFOAKfb", "ZTuS")).toEqual("duUkS960fdmFOAKfb");
  expect(F("uUkS960ZTuSfZTuSdmFOAKfb", "xTuS")).toEqual(
    "uUkS960ZTuSfZTuSdmFOAKfb"
  );
  expect(F("cAtgCSRYs79trwr79trwM7X1M", "79trw")).toEqual("cAtgCSRYsrM7X1M");
});
