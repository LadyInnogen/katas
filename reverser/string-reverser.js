let reversedMessage = "";
let message = "Call me Ishmael";
for(let i=0; i<message.length; i++){
	//Each iteration, grab each letter from the end to the beginning
	reversedMessage += message[message.length-i];
}
console.log("Secret Message: ", reverseMessage);
