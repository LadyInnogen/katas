let secretMessage = "";
let message = "Call me Ishmael";
for(let i=message.length-1; i>=0; i--){
	secretMessage += message[i];
}
console.log("Secret Message: ", secretMessage);
