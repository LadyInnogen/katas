const reverse = require('./string-reverser');

let positiveNumber = 5328409;
let negativeNumber = -4321;

function reverseInteger(signedInteger){
	let numberToReverse = signedInteger + "";
	let reversedNumber = reverse(numberToReverse);
	return reversedNumber;
}

console.log(positiveNumber, " reversed is ", reverseInteger(positiveNumber));
console.log(negativeNumber, "reversed is ", reverseInteger(negativeNumber));

