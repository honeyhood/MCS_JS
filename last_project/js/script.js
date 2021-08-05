class Person {
  constructor(name) {
    this.name = name;
    this.happiness = 0;
  }
  hasCat() {
    ++this.happiness;
  }
  hasRest() {
    ++this.happiness;
  }
  hasMoney() {
    ++this.happiness;
  }
  isSunny() {
    const APIKey = "8493b1efa047701cfaeb2f79f988147b";
    let city = "Moscow";
    let url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    let DATA = JSON.parse(xhr.responseText);
    if (Math.round(DATA.main.temp) - 273 > 15) {
     ++this.happiness;
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
  let inputName = document.querySelector(".inputName");
  let user = new Person(inputName.value);
  if (catTrue.checked) {
    user.hasCat();
  } else if (restTrue.checked) {
    user.hasRest();
  } else if (moneyTrue.checked) {
    user.hasMoney();
  }
  user.isSunny();
  let personName = document.querySelector(".personName");
  personName.innerHTML = user.name;
  let icon = document.querySelector(".icon");
  if (user.happiness == 4) {
    icon.innerHTML = "😄";
  } else if (user.happiness == 3) {
    icon.innerHTML = "😐";
  } else if (user.happiness == 2) {
    icon.innerHTML = "😐";
  } else if (user.happiness < 2)
    icon.innerHTML = "☹️";
}