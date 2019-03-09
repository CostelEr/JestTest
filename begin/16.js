/**
  Two points with the coordinates x1 and x2 are given on the real axis. 
  Find the distance between these points: |x2 − x1|.
 */

function Distance(x1, x2) {
  return Number(Math.abs(x2 - x1).toFixed(2));
}

module.exports = { Distance };
