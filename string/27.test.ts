import { F } from "./27";
test("should return correct results", () => {
  expect(F(9, 13, "KHa00LFzrIAJPsUW", "9hGjuoeY0ccU0X6s8")).toEqual(
    "KHa00LFzruoeY0ccU0X6s8"
  );
  expect(F(7, 5, "sCsvn229CygAf4dz", "inxSync2meO")).toEqual("sCsvn22c2meO");
  expect(F(7, 8, "xokIEy0viLmSBEhjzMqbBK", "CcqQftyUQ4U1")).toEqual(
    "xokIEy0ftyUQ4U1"
  );
});
