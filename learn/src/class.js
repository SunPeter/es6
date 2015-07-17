class A{
	constructor(name){
		this.name=name
	}

	say(){
		console.log(this.name)
	}
}

class B extends A{
	constructor(name){
		super(name)
	}
	eat(){
		console.log("eat")
	}
}

