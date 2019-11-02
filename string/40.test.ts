import { F } from "./40";
test("should return correct results", () => {
  expect(F("iJ6DVG9EP TViP3XeG1j9wGfP")).toEqual("");
  expect(F("iJ6DVG9EP TViP3X eG1j9wGfP")).toEqual("TViP3X");
  expect(F(" tPW4WJ jf7yI s62sjVR 5opR7 PQ4jUfH JsM7tTD 3Xv xPRQ")).toEqual(
    "tPW4WJ jf7yI s62sjVR 5opR7 PQ4jUfH JsM7tTD 3Xv"
  );
  expect(F("  ")).toEqual("");
  expect(F("0dNpYE iaw44a LsRhci 5X7wsT")).toEqual("iaw44a LsRhci");
  expect(F("W59aPH 5ckaqAthukePOnRr2W")).toEqual("");
  expect(F("9 ivY 22i7 VNVLpL8 87ILi Xdof ZKxr7ay43Tr")).toEqual(
    "ivY 22i7 VNVLpL8 87ILi Xdof"
  );
});
