
let messageToReverse = "Call me Ishmael";

function reverse(message){
	let reversedMessage = "";
	for(let i=1; i<=message.length; i++){
		//Each iteration, grab each letter from the end to the beginning
		reversedMessage += message[message.length-i];
	}
	return reversedMessage;
};

console.log("Secret Message: ", reverse(messageToReverse));

module.exports = {
	reverse: reverse
};

