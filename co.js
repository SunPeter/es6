var fs = require("fs")

function ReadFile() {
    return function(fn) {
        fs.readFile("./generator.js", "utf8", function(err, data) {
            fn(err, data)
        })
    }
}
var thunk = ReadFile();

thunk(function(err, data) {
	if (err) {
		console.log(err)
	} else {
		console.log(data)
	}
});