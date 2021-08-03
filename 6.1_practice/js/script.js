const form = document.forms[0];

form.onsubmit = e => {
	e.preventDefault();
	const APIKey = "8493b1efa047701cfaeb2f79f988147b";
	let city = document.querySelector(".city").value;
	let url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+APIKey;
	let temperature = document.querySelector(".temperature");
	let humidity = document.querySelector(".humidity");
	let xhr = new XMLHttpRequest();
	xhr.open("GET", url, false);
	xhr.send();
	let DATA = JSON.parse(xhr.responseText);
	console.log(DATA);
	temperature.innerHTML = Math.round(DATA.main.temp) - 273;
	humidity.innerHTML = DATA.main.humidity;
}