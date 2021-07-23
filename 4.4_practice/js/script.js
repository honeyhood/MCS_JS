function haveEnough() {
	totalCash = parseInt(prompt("Количество денег?"));
	watchesCount = parseInt(prompt("Сколько золотых часов?"));
	earringsCount = parseInt(prompt("Сколько серёжек с бриллиантами?"));
	watchesPrice = parseInt(prompt("Сколько стоят одни часы?"));
	earringsPrice = parseInt(prompt("Сколько стоят одна серёжка?"));
	Sum = watchesCount * watchesPrice + earringsCount * earringsPrice;
	if(totalCash>Sum) {
		return "Enough $$$"
	}else if(totalCash<Sum) {
		return "Not Enough $$$"
	}
}
console.log(haveEnough());