class Tiger {
	constructor(name){
		this.name = name;
	}
	feedCat() {
		return "Purrrr";
	} 
}

class angryTiger extends Tiger {
	throwDart() {
		return "zzzzzzzz";
	}
}

/*let tiger1 = new angryTiger("tigrulya");
console.log(tiger1.throwDart());*/