import { F } from "./62";
test("should return correct results", () => {
  expect(F("Чтобы одно.")).toEqual("Шупвь пеоп.");
  expect(F("То, что ищешь, найдешь только обыскав все.")).toEqual(
    "Уп, шуп йъжщэ, обкежщэ упмэлп пвьтлбг гтж."
  );
  expect(
    F(
      "Кто может - делает, кто не может - учит, кто не может учить - управляет."
    )
  ).toEqual(
    "Луп нпзжу - ежмбжу, луп ож нпзжу - фшйу, луп ож нпзжу фшйуэ - фрсбгмажу."
  );
});