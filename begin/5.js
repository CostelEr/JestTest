/**
 * Given the edge a of a cube, find the volume V = a3 and the surface area S = 6·a2 of the cube.
 */

function V(a) {
  return a * a * a;
}

function S(a) {
  return 6 * a * a;
}
module.exports = { V, S };
