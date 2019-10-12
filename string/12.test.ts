import { F } from "./12";
test("should return correct results", () => {
  expect(F("йЩVoЙCUяз", 5)).toEqual(
    "й*****Щ*****V*****o*****Й*****C*****U*****я*****з"
  );
  expect(F("FДмIa", 3)).toEqual("F***Д***м***I***a");
  expect(F("4aYbHБЭUDs", 1)).toEqual("4*a*Y*b*H*Б*Э*U*D*s");
});
