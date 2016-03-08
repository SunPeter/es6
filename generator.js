// https://ponyfoo.com/articles/es6-generators-in-depth
/*
//yield 不仅可以用于函数生成 还能用于赋值

// 当我们第一次调用g.next()的时候
// 代码会执行到第一个yield声明的地方。
// 也就是i = yield 1;，注意这边只是执行到了赋值语句的右边yield部分
// 换句话说i =这个赋值语句还没有执行

// 接下来执行赋值语句 i= 下一个next传入的参数
// That’s because the first call to .next enters the generator 
// and there’s no yield expression waiting to capture the value from g.next(value).
function* gen() {
    i = yield 1;
    console.log("i", i)

    i = yield 2;
    console.log("i", i)

    i = yield 3;
    console.log("i", i)

    //给结束的函数赋值
    return "finish"
}

var g = new gen();
console.log(g.next());
console.log(g.next());
console.log(g.next(2))

//结束
console.log(g.next(123))
*/
//=================
/*
//yield 嵌套
function* a() {
    yield 1;
}
var _a = new a()
function* b() {
    yield 2
    //此处嵌套
    yield* _a
    return "finish b"
}

var _b = new b();
console.log(_b.next())
console.log(_b.next())
console.log(_b.next())
*/
//=================
/*
//generator 函数允许使用迭代器 
function* generator() {
    yield 'p'
    console.log('o')
    yield 'n'
    console.log('y')
    yield 'f'
    console.log('o')
    yield 'o'
    console.log('!')
}

// var foo = generator()
// for (var pony of foo) {
//   console.log(pony)
// }

// var a = [1, 2, 3]
// console.log(...a)
var foo1 = generator()
console.log([...foo1])
*/
