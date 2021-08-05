let newSchools = [
  [
    ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
    ['Sonny Digital', 'Metro Boomin', '12Hunna']
  ],
  [
    ['Yung Lean', 'Ecco2K', 'Bladee'],
    ['Whitearmor', 'PJ Beats', 'Yung Gud']
  ]
]

/*for (let newSchool of newSchools) { //сначала он перебирает и выводит два массива которые внутри newSchools, после них нужно перебрать их
  console.log(newSchool); 
}*/


for (let newSchool of newSchools) {
  for(let element of newSchool) { //это соответственно перебор самих двух массивов которые лежат внутри newSchools
    console.log(element);
  }
}