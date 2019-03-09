/**
 Given an independent variable x, find the value of a function y = 3x6 − 6x2 − 7.
 */

function Per(x1, y1, x2, y2, x3, y3) {
  /** Aflam lungimea laturii a */
  let L11 = Math.pow(x2 - x1, 2);
  let L12 = (y2 - y1) * (y2 - y1);
  let a = Math.sqrt(L11 + L12);

  /** Aflam lungimea laturii b */
  let L21 = (x3 - x1) * (x3 - x1);
  let L22 = (y3 - y1) * (y3 - y1);
  let b = Math.sqrt(L21 + L22);

  /** Aflam lungimea laturii c */
  let L31 = (x3 - x2) * (x3 - x2);
  let L32 = (y3 - y2) * (y3 - y2);
  let c = Math.sqrt(L31 + L32);

  return Number((a + b + c).toFixed(2));
}

function S(x1, y1, x2, y2, x3, y3) {
  /** Aflam lungimea laturii a */
  let L11 = (x2 - x1) * (x2 - x1);
  let L12 = (y2 - y1) * (y2 - y1);
  let a = Math.sqrt(L11 + L12);

  /** Aflam lungimea laturii b */
  let L21 = (x3 - x1) * (x3 - x1);
  let L22 = (y3 - y1) * (y3 - y1);
  let b = Math.sqrt(L21 + L22);

  /** Aflam lungimea laturii c */
  let L31 = (x3 - x2) * (x3 - x2);
  let L32 = (y3 - y2) * (y3 - y2);
  let c = Math.sqrt(L31 + L32);

  let p = (a + b + c) / 2;

  return Number(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2));
}

module.exports = { Per, S };
