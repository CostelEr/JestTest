/**
 Exchange the values of two given variables A and B. Output the new values of A and B.
 */
function SW(a) {
  let c = a[0];
  a[0] = a[1];
  a[1] = c;
  return a;
}
module.exports = { SW };
