import { F } from "./33";
test("should return correct results", () => {
  expect(F("KATCrwR8qvNEc7o7GcWHqu7K9", "vNEc7")).toEqual(
    "KATCrwR8qo7GcWHqu7K9"
  );
  expect(F("7gXVMSV5ALKE5s3ePBePuos7k", "lEal")).toEqual(
    "7gXVMSV5ALKE5s3ePBePuos7k"
  );
  expect(F("5KFxYfAfQFxYfFxYfOQUFxYfqTcQ", "FxYf")).toEqual(
    "5KAfQFxYfFxYfOQUFxYfqTcQ"
  );
});
