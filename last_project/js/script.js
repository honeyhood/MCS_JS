class Person {
	constructor(name) {
		this.name = name;
		this.happiness = 0;
	}
	hasCat() {
		return ++this.happiness;
	}
	hasRest() {
		return ++this.happiness;
	}
	hasMoney() {
		return ++this.happiness;
	}
	isSunny() {
		const APIKey = "8493b1efa047701cfaeb2f79f988147b";
		let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
		let xhr = new XMLHttpRequest();
		xhr.open("GET", url, false);
		xhr.send();
		let DATA = JSON.parse(xhr.responseText);
		if(Math.round(DATA.main.temp) - 273 > 15) {
			++this.happiness;
		}else {
			return this.happiness
		}
	}
}

const form = document.forms[0];

form.onsubmit = e => {
	e.preventDefault();
	let catTrue = document.getElementById("catTrue");
	let restTrue = document.getElementById("restTrue");
	let moneyTrue = document.getElementById("moneyTrue");
	let catFalse = document.getElementById("catTrue");
	let restFalse = document.getElementById("restTrue");
	let moneyFalse = document.getElementById("moneyTrue");
	let inputName = document.querySelectorAll(".inputName");
	let User = new Person("");
	if(catTrue.checked) {
		return User.hasCat(); 
	}else if(restTrue.checked) {
		return User.hasRest();
	}else if(moneyTrue.checked) {
		return User.hasMoney();
	}
	User.isSunny();
	let personName = document.querySelector(".personName");
	personName.innerHTML = ;
	}