import { F } from "./39";
test("should return correct results", () => {
  expect(F("iJ6DVG9EP TViP3XeG1j9wGfP")).toEqual("");
  expect(F("iJ6DVG9EP TViP3X eG1j9wGfP")).toEqual("TViP3X");
  expect(F("CBzkt qWIzTUW akCoh2LgutD")).toEqual("qWIzTUW");
  expect(F(" tPW4WJ jf7yI s62sjVR 5opR7 PQ4jUfH JsM7tTD 3Xv xPRQ")).toEqual(
    "tPW4WJ"
  );
});
