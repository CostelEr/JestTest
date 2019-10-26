import { F } from "./34";
test("should return correct results", () => {
  expect(F("r9yzdaS9yzdYvwW9yzd19yzdu0P", "9yzd")).toEqual(
    "r9yzdaS9yzdYvwW9yzd1u0P"
  );
  expect(F("iS22IkJrMPnCsLHuIIEFDdAeu", "Y5bfZ")).toEqual(
    "iS22IkJrMPnCsLHuIIEFDdAeu"
  );
  expect(F("iWP1Czrd3J6zrdOzrdzrdXez1", "zrd")).toEqual(
    "iWP1Czrd3J6zrdOzrdXez1"
  );
});
