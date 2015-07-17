// 解构
var [a,b]=[1,2]


var [a,,c]=[1,2,3]


// 默认参数值
f=(name="ssd")=>{
	console.log(name)
}

// 不定参数

f=(...x)=>{
	return x.join("-")
}

// 拓展参数
var data=[1,2,4]
f=(...data)=>{
	
}

f.apply(num,data)

function g (d1,d2,d3) {
	console.log(`${d1}`)
}