const stringReverser = require('./string-reverser');

let positiveNumber = 5328409;
let positiveNumberWithTrailingZero = 243320;
let negativeNumber = -4321;
let negativeNumberWithTrailingZero = -46540;

function reverseInteger(signedInteger){
	let numberToReverse = signedInteger + "";
	let reversedNumber;

	if(signedInteger < 0 ){
		unsignedNumberToReverse = numberToReverse.substring(1);
		reversedNumber = "-"+stringReverser.reverse(unsignedNumberToReverse);
	} else {
		reversedNumber = stringReverser.reverse(numberToReverse);
	}

	return reversedNumber;
}

console.log(positiveNumber, " reversed is ", reverseInteger(positiveNumber));
console.log(negativeNumber, " reversed is ", reverseInteger(negativeNumber));
console.log(positiveNumberWithTrailingZero, " reversed is ", reverseInteger(positiveNumberWithTrailingZero));
console.log(negativeNumberWithTrailingZero, " reversed is ", reverseInteger(negativeNumberWithTrailingZero));
