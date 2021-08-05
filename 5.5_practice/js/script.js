let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

let bitcoinBar = document.querySelector(".bar1");
let ethereumBar = document.querySelector(".bar2");
let litecoinBar = document.querySelector(".bar3");

bitcoinBar.style.width = crypto[0].price + "px";
ethereumBar.style.width = crypto[1].price + "px";
litecoinBar.style.width = crypto[2].price + "px";
