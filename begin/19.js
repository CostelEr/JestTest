/**
The coordinates (x1, y1) and (x2, y2) of two opposite vertices of a rectangle are given. 
Sides of the rectangle are parallel to coordinate axes. 
Find the perimeter and the area of the rectangle.
 */

function P(x1, y1, x2, y2) {
  let L1 = Number(Math.abs(x2 - x1).toFixed(2));
  let L2 = Number(Math.abs(y2 - y1).toFixed(2));
  return Number(((L1 + L2) * 2).toFixed(2));
}

function S(x1, y1, x2, y2) {
  let L1 = Number(Math.abs(x2 - x1).toFixed(2));
  let L2 = Number(Math.abs(y2 - y1).toFixed(2));
  return Number((L1 * L2).toFixed(2));
}
module.exports = { P, S };
