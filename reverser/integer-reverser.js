const stringReverser = require('./string-reverser');

let positiveNumber = 5328409;
let negativeNumber = -4321;

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
console.log(negativeNumber, "reversed is ", reverseInteger(negativeNumber));

