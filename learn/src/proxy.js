var MyArray = function () {
    return new Proxy(Array.apply(null, arguments), {
        get: function (target, name) {
            if (name in target || (+name >= 0 && +name < 4294967295)) {
                return target[name];
            } else {
                throw "非法索引";
            }
        },
        set: function (target, name, val) {
            if (name in target || (+name >= 0 && +name < 4294967295)) {
                target[name] = val;
            } else {
                throw "非法索引";
            }
        }
    })
}