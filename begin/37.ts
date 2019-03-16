/**
  The velocity of the first car is V1 km/h, the velocity of the second car is V2 km/h, 
  the initial distance between the cars is S km. Find the distance between the cars 
  after T hours provided that at the start time the distance is decreasing. 
  This distance is equal to an absolute value of a difference between the initial distance 
  and the total distance covered by the both cars.
 */
export function Distance(V1, V2, S, T: number) {
  let z;
  z = parseFloat(Math.abs(S - (V1 + V2) * T).toFixed(2));
  return z;
}
