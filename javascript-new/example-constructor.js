function ExampleConstructor() {}
console.log('value of ExampleConstructor', ExampleConstructor);
console.log('type of ExampleConstructor', typeof ExampleConstructor);

const newFunction = new ExampleConstructor();
console.log('value of newFunction', newFunction);

const instance = newFunction instanceof ExampleConstructor;
console.log('newFunction instance of ExampleConstructor', instance);
