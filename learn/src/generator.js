function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
}

var hw = helloWorldGenerator();