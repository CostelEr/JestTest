import { F } from "./63";
test("should return correct results", () => {
  expect(F("Тот, кто смеется последним, возможно не понял шутки.", 4)).toEqual(
    "Цтц, оцт хрййцхг утхпйисмр, жтлрткст сй утсгп ьчцом."
  );
  expect(F("Находишь всегда то, что не искал.", 8)).toEqual(
    "Хиэцмрад кщнлми ъц, яъц хн рщтиу."
  );
  expect(F("Когда события принимают крутой оборот, все смываются.", 3)).toEqual(
    "Нсжзг фсдюхлв тулрлпгбх нуцхсм сдсусх, ефи фпюегбхфв."
  );

  expect(
    F("Стоит вам только вымыть машину, как тут же пойдет дождь.", 9)
  ).toEqual("Ъычсы лйх ычфеуч лдхдые хйбсць, уйу ыьы по шчтноы нчпне.");
  expect(F("Компьютеры ненадежны, но люди еще ненадежнее.", 5)).toEqual(
    "Пусфбгчкха тктейклта, ту ргйн кюк тктейклткк."
  );
  expect(F("Легче получить прощение, чем разрешение.", 6)).toEqual(
    "Слйэл хфсщэошв хцфялуол, элт цжнцлюлуол."
  );
  expect(F("Чтобы одно очистить, нужно другое запачкать.", 9)).toEqual(
    "Аычкд чнцч часъысые, цьпцч нщьмчо рйшйауйые."
  );
});
