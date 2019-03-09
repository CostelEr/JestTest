/**
 Variables A, B, C are given. Change values of the variables by moving the given value 
 of A into the variable C, the given value of C into the variable B, 
 and the given value of B into the variable A. Output the new values of A, B, C.
 */
function SW(a) {
  b = a[0];
  a[0] = a[1];
  a[1] = a[2];
  a[2] = b;
  return a;
}
module.exports = { SW };
