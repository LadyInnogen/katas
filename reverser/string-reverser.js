let reverse = function reverse(message){
	let reversedMessage = "";
	for(let i=1; i<=message.length; i++){
		//Each iteration, grab each letter from the end to the beginning
		reversedMessage += message[message.length-i];
	}
	return reversedMessage;
};

module.exports = {
	reverse: reverse
};

