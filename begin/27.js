/**
  Given a number A, compute a power A8 using three 
  multiplying operators for computing A2, A4, A8 sequentially. 
  Output all obtained powers of the number A.
 */
function P(a) {
  b = a * a;
  c = b * b;
  d = c * c;
  a[0] = Number(b.toFixed(2));
  a[1] = Number(c.toFixed(2));
  a[2] = Number(d.toFixed(2));
  return a;
}
module.exports = { P };
