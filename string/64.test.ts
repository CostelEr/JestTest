import { F } from "./64";
test("should return correct results", () => {
  expect(
    F("Ъычсы лйх ычфеуч лдхдые хйбсць, уйу ыьы по шчтноы нчпне.", 9)
  ).toEqual("Стоит вам только вымыть машину, как тут же пойдет дождь.");
  expect(F("Пусфбгчкха тктейклта, ту ргйн кюк тктейклткк.", 5)).toEqual(
    "Компьютеры ненадежны, но люди еще ненадежнее."
  );
  expect(
    F("Сйц цдотн уптщтн хмцчдъмм, отцтфдг сй ртзпд ея хцдца йэй щчкй.", 4)
  ).toEqual("Нет такой плохой ситуации, которая не могла бы стать еще хуже.");
});
