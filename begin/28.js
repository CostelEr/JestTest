/**
  Given a number A, compute a power A15 using five multiplying operators 
  for computing A2, A3, A5, A10, A15 sequentially. 
  Output all obtained powers of the number A
 */
function P(a) {
  a2 = a * a;
  a3 = a * a2;
  a5 = a2 * a3;
  a10 = a5 * a5;
  a15 = a5 * a5 * a5;
  a[0] = Number(a2.toFixed(2));
  a[1] = Number(a3.toFixed(2));
  a[2] = Number(a5.toFixed(2));
  a[3] = Number(a10.toFixed(2));
  a[4] = Number(a15.toFixed(2));
  return a;
}
module.exports = { P };
