var http = require("http");
var co = require("co");

function App() {
    this.ctx = {}
    this.middlewares = [];
}

var app = App.prototype;

app.use = function(fn) {
    this.middlewares.push(fn);
}

app.response = function* (next) {
    this.response.end("end");
}

app.listen = function() {
    var server = http.createServer(this.cb());
    server.listen.apply(server, arguments);
}

app.compose = function() {
    var that = this;
    var middlewares = that.middlewares;

    return co(function* () {
        var prev = null;
        var i = middlewares.length;
        // 挨个的获取对应的generator对象
        // 同时将后面的generator对象传递给前面中间件的generatorFunction。
        // 这样就形成了一个从前往后的调用链
        // 每个中间件都保存着下一个中间件的generator的引用。
        while (i--) {
            prev = middlewares[i].call(that, prev);
        }
        yield prev;
    })
}

app.cb = function() {
    var that = this; //  函数作用域
    that.middlewares.push(that.response);
    var fn = that.compose();
    return function(request, response) {
        that.ctx.request = request;
        that.ctx.response = response;
        fn.call(that.ctx);
    }
}

var appInstance = new App();
appInstance.use(function* (next) {
    console.log(1);
    yield next;
    console.log(1.1)
})
appInstance.use(function* (next) {
    console.log(2);
    yield next;
    console.log(2.1)
})
appInstance.listen(8080);