import { F } from "./16";
test("should return correct results", () => {
  expect(F("JЧExTзоЙЯLGьэYPCВRж")).toEqual("jЧextзоЙЯlgьэypcВrж");
  expect(F("ьщзоЮыGТCgVmAЦЬmOАкЭIЧ")).toEqual("ьщзоЮыgТcgvmaЦЬmoАкЭiЧ");
  expect(F("фMТмщOlEGиv7эявИAФ")).toEqual("фmТмщolegиv7эявИaФ");
});
