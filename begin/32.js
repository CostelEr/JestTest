/**
  A centigrade temperature T is given. Convert it into a Fahrenheit temperature. 
  The centigrade temperature TC and the Fahrenheit temperature TF are connected as:
  TC = (TF − 32)·5/9.
 */
function TF(tc) {
  return Number((32 + (9 * tc) / 5).toFixed(2));
}
module.exports = { TF };
