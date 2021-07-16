let totalCash = parseInt(prompt("Количество денег?"))
let watchesCount = parseInt(prompt("Сколько золотых часов?"))
let earringsCount = parseInt(prompt("Сколько серёжек с бриллиантами?"))
let watchesPrice = parseInt(prompt("Сколько стоят одни часы?"))
let earringsPrice = parseInt(prompt("Сколько стоят одна серёжка?"))
let Sum = watchesCount * watchesPrice + earringsCount * earringsPrice
document.write(totalCash>Sum)
