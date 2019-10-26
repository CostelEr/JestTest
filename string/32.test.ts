import { F } from "./32";
test("should return correct results", () => {
  expect(F("1HeTcAQiMln2eHBsbR6wLH9tf", "QiMln2")).toEqual(1);
  expect(F("3ZmBdZkoVGXJaJOUfOV74wcW7", "FteUyN")).toEqual(0);
  expect(F("5ViOpwt2WNOpwagKvOpwOpwTkId", "Opw")).toEqual(4);
});
