import { F } from "./38";
test("should return correct results", () => {
  expect(F("HBQBqpTtEL5he6ptEL5dXHYVQm", "tEL5", "1s5M9")).toEqual(
    "HBQBqpT1s5M9he6p1s5M9dXHYVQm"
  );
  expect(F("b82ulb82u82ua1pg82uMH82uWFR1Vf8B", "82u", "0Tt3P")).toEqual(
    "b0Tt3Plb0Tt3P0Tt3Pa1pg0Tt3PMH0Tt3PWFR1Vf8B"
  );
  expect(F("f3YcwvtJqfwHvtJqffiYvtJqf4py", "vtJqf", "kzO")).toEqual(
    "f3YcwkzOwHkzOfiYkzO4py"
  );
});
