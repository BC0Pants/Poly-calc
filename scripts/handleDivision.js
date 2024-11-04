import { parseTerm } from './parseTerm.js';
import { formatPolynomial } from './formatPolynomial.js';
import { dividePolynomials } from './dividePolynomials.js';

export function handleDivision() {
    const firstPoly = document.querySelector("#first-polynomial").value;
    const secondPoly = document.querySelector("#second-polynomial").value;

    const regex = /[+-]?[^-+]+/g;

    const firstPolyParsed = firstPoly.match(regex).map(parseTerm);
    const secondPolyParsed = secondPoly.match(regex).map(parseTerm);

    let firstPolyCoeffArr = firstPolyParsed.map(arr => arr[0]);
    let firstPolyPowArr = firstPolyParsed.map(arr => arr[1]);

    let secondPolyCoeffArr = secondPolyParsed.map(arr => arr[0]);
    let secondPolyPowArr = secondPolyParsed.map(arr => arr[1]);

    let maxPowerFirstArr = Math.max(...firstPolyPowArr);
    let minPowerFirstArr = Math.min(...firstPolyPowArr);
    let fullFirstPolyCoeffArr = [];

    for (let i = maxPowerFirstArr; i >= minPowerFirstArr; i--) {
        let index = firstPolyPowArr.indexOf(i);
        if (index !== -1) {
            fullFirstPolyCoeffArr.push(firstPolyCoeffArr[index]);
        } else {
            fullFirstPolyCoeffArr.push(0);
        }
    }

    let maxPowerSecondArr = Math.max(...secondPolyPowArr);
    let minPowerSecondArr = Math.min(...secondPolyPowArr);
    let fullSecondPolyCoeffArr = [];


    for (let i = maxPowerSecondArr; i >= minPowerSecondArr; i--) {
        let index = secondPolyPowArr.indexOf(i);
        if (index !== -1) {
            fullSecondPolyCoeffArr.push(secondPolyCoeffArr[index]);
        } else {
            fullSecondPolyCoeffArr.push(0);
        }
    }


    const result = dividePolynomials(fullFirstPolyCoeffArr, fullSecondPolyCoeffArr);

    const quotientPolynomial = formatPolynomial(result.quotient, result.quotient.map((_, i) => result.quotient.length - 1 - i));
    const remainderPolynomial = formatPolynomial(result.remainder, result.remainder.map((_, i) => result.remainder.length - 1 - i));

    const resultDiv = document.querySelector("#result-division");
    resultDiv.innerHTML = `
        <p><strong>Quotient:</strong> ${quotientPolynomial || '0'}</p>
        <p><strong>Remainder:</strong> ${remainderPolynomial || '0'}</p>
    `;
}
