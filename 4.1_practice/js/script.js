console.log("You are at " +window.location);

let answer = parseInt(prompt("Какое число возвести в модуль?"));

if(answer>=0) {
	console.log(answer);
}else if(answer<0) {
	console.log(-answer);
}