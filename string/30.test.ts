import { F } from "./30";
test("should return correct results", () => {
  expect(F("c", "cFRUoHNIMnOcc", "ly")).toEqual("clyFRUoHNIMnOclycly");
  expect(F("K", "LKKLdOdKxNKKgd", "Qrn")).toEqual(
    "LKQrnKQrnLdOdKQrnxNKQrnKQrngd"
  );
  expect(F("F", "4ZFApg7FFP", "i8F")).toEqual("4ZFi8FApg7Fi8FFi8FP");
});
