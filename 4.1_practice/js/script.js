console.log("You are at " +window.location);

let answer = prompt("Какое число возвести в модуль?");
answer = parseInt(answer);

if(answer>=0) {
	console.log(answer);
}else if(answer<=0) {
	console.log(-answer);
}