const APIKey = "8493b1efa047701cfaeb2f79f988147b";
const city = document.querySelector(".city").value;
const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
const result = document.querySelector(".temperature");

const form = document.forms[0];

form.onsubmit = e => {
	e.preventDefault();
	city = document.querySelector(".city").value;
	url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	let DATA = JSON.parse(xhr.responseText);
	result.innerHTML = DATA.main.temp - 273;
}


/*form.onsubmit = function(e){
	e.preventDefault();
	result.innerHTML = DATA.main.temp - 273;
}*/