var o={
	name:"ssd",
	say(){
		console.log(this.name)
	}
}

var b={
	__proto__:o,
	name:"saw",
	eat(){
		console.log("eat")
	}
}