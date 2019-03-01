let messages = ["level", "Level", "Nispon anomimata mi monan opsin", "notapalindrome"];

messages.map(msg => {printPalindromeResult(msg)});

function palindromeChecker(message){
	let isPalindrome = false;
	let transformedMsg = message.toLowerCase().replace(" ", "");
	let length = transformedMsg.length;

	console.log("length: ", length);

	for(let index = 0; index < length; index++){
		let backwardsIndex = length - (index + 1);
		if(index <= backwardsIndex){
			if(transformedMsg[index] == transformedMsg[backwardsIndex]){
				isPalindrome = true;
			}
		}
	}
	return isPalindrome;
}

function printPalindromeResult(message){
	console.log("Is \"" + message + "\" a palindrome? ", palindromeChecker(message));
}


