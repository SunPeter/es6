// http://www.ruanyifeng.com/blog/2015/05/thunk.html
// var fs = require("fs")

// function ReadFile() {
//     return function(fn) {
//         fs.readFile("./generator.js", "utf8", function(err, data) {
//             fn(err, data)
//         })
//     }
// }
// var thunk = ReadFile();

// thunk(function(err, data) {
// 	if (err) {
// 		console.log(err)
// 	} else {
// 		console.log(data)
// 	}
// });


function* gen(){
	yield 1;
	yield 2;
	yield 3;
	return 4;
}

function co(fn) {
  return function(done) {
    var ctx = this;
    var gen = fn.call(ctx);
    var it = null;
    function _next(err, res) {
      it = gen.next(res);
      if (it.done) {
        done.call(ctx, err, it.value);
      } else {
        it.value(_next);
      }
    }
    _next();
  }
}
var g = new gen()
var r = co(g)
r(function(err, data){
	console.log(data)
});