/**
  Given an integer K, output the respective examination mark: 
  1 — "bad", 2 — "unsatisfactory", 3 — "mediocre", 4 — "good", 5 — "excellent". 
  If K is not in the range 1 to 5 then output string "error".
 */
export function F(K: number) {
  let D = "";
  switch (K) {
    case 1:
      D = "bad";
      break;
    case 2:
      D = "unsatisfactory";
      break;
    case 3:
      D = "mediocre";
      break;
    case 4:
      D = "good";
      break;
    case 5:
      D = "excellent";
      break;
    default:
      D = "error";
  }

  return D;
}
