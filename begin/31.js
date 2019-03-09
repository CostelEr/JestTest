/**
  A Fahrenheit temperature T is given. Convert it into a centigrade temperature. 
  The centigrade temperature TC and the Fahrenheit temperature TF are connected as:
  TC = (TF − 32)·5/9.
 */
function TC(tf) {
  return Number((((tf - 32) * 5) / 9).toFixed(2));
}
module.exports = { TC };
