/**
 The coordinates (x1, y1) and (x2, y2) of two points are given. 
 Find the distance between the points: ((x2 − x1)2 + (y2 − y1)2)1/2.
 */

function Distance(x1, y1, x2, y2) {
  let L1 = (x2 - x1) * (x2 - x1);
  let L2 = (y2 - y1) * (y2 - y1);
  return Number(Math.sqrt(L1 + L2).toFixed(2));
}

module.exports = { Distance };
