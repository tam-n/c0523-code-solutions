# es6-arrow-functions-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is the syntax for defining an arrow function?
  parameter => expression or block
- When an arrow function's body is not surrounded in curly braces (_concise body syntax_), what changes in its functionality?
  It becomes an expression which the return value will be the result of the expression
- When using _concise body syntax_, how do you return an object literal?
  Javascript automatically returns the value of a concise body
- In the expression
  `js
  foo(() => 42);
  `
  - Identify the arrow function
    The arrow function is the () => 42
  - How many arguments does the arrow function take?
    zero (0)
  - What value does it return?
    42
  - How many arguments are passed to the function `foo`?
    1
  - What type of argument is passed to the function `foo`?
    callback function
- In the expression
  `` js
  bar((y) => {
    console.log(`4y = ${4 * y}`);
  });
   `` - Identify the arrow function
  The arrow function is (y) => {console.log(`4y = ${4 * y}`)} - How many arguments does the arrow function take?
  one (1)
  - What value does it return?
    Undefined
  - How many arguments are passed to the function `bar`?
    one (1)
  - What type of argument is passed to the function `bar`?
    callback function - When does the arrow function's code get executed?
    when the function `bar` is called
- How does the value of `this` differ between standard functions and arrow functions?
  The value of `this` of a standard function is within the scope of the standard function, while the `this` of arrow functions is the enclosing context.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
