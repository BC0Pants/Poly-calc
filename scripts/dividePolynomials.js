export function dividePolynomials(dividend, divisor) {
  let quotient = [];
  let remainder = [...dividend];

  for (let i = 0; i <= dividend.length - divisor.length; i++) {
    let coeff = remainder[i] / divisor[0];
    quotient.push(coeff);

    for (let j = 0; j < divisor.length; j++) {
      remainder[i + j] -= coeff * divisor[j];
    }
  }

  while (remainder.length > 0 && remainder[0] === 0) {
    remainder.shift();
  }

  return {
    quotient: quotient,
    remainder: remainder,
  };
}
