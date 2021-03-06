import { F } from "./133";
test("should return correct results", () => {
  expect(
    F(4, [
      { x: 9.04, y: 8.79 },
      { x: 3.17, y: -7.78 },
      { x: 2.98, y: 7.87 },
      { x: 8.94, y: 9.07 }
    ])
  ).toEqual({ x: 2.98, y: 7.87 });

  expect(
    F(8, [
      { x: -1.48, y: 0.78 },
      { x: 8.33, y: -5.49 },
      { x: 7.48, y: 9.51 },
      { x: 2.15, y: 7.56 },
      { x: -0.23, y: 1.2 },
      { x: 9.14, y: -8.3 },
      { x: -2.55, y: -9.31 },
      { x: 0.96, y: 6.83 }
    ])
  ).toEqual({ x: 0.96, y: 6.83 });

  expect(
    F(7, [
      { x: 3.04, y: 9.72 },
      { x: -1.47, y: 2.1 },
      { x: -4.71, y: -8.84 },
      { x: -9.5, y: 5.15 },
      { x: 2.07, y: -1.29 },
      { x: -3.11, y: 2.13 },
      { x: 1.19, y: -8.34 }
    ])
  ).toEqual({ x: -4.71, y: -8.84 });

  expect(
    F(7, [
      { x: -3.04, y: 9.72 },
      { x: -1.47, y: 2.1 },
      { x: -4.71, y: 8.84 },
      { x: -9.5, y: 5.15 },
      { x: 2.07, y: -1.29 },
      { x: -3.11, y: 2.13 },
      { x: 1.19, y: -8.34 }
    ])
  ).toEqual({ x: 0, y: 0 });
});
