export function parseTerm(term) {
  let coeff = 1;
  let power = 0;

  if (term.includes("x")) {
    let [left, right] = term.split("x");

    coeff =
      left === "" || left === "+" ? 1 : left === "-" ? -1 : parseFloat(left);

    power = right && right.includes("^") ? parseInt(right.split("^")[1]) : 1;
  } else {
    coeff = parseFloat(term);
  }

  return [coeff, power];
}
