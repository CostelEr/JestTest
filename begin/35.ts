/**
   A boat velocity in still water is V km/h, river flow velocity is U km/h (U < V). 
   The boat goes along the lake during T1 h and then goes against stream of the river during T2 h. 
   Positive numbers V, U, T1, T2 are given. 
   Find the distance S covered by the boat (distance = time · velocity).
 */
export function Distance(V, U, T1, T2: number) {
  let z;
  z = parseFloat((V * T1 + (V - U) * T2).toFixed(2));
  return z;
}
