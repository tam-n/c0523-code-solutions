# es6-operators-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  The `&&` operator and `||` operators return truthy or falsy
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  The short-circuit evaluation stops evaluating all operands once it encounters a `false` operand
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  The `??` nullish coalescing operator returns the a default value on the right if the left operand is false. It differs from the `||` operator because it does not return a boolean by default
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  The `?:` ternary operator uses 3 operands. The first is a condition, the second is an expression that executes if truthy, and the third is an expression that executes if falsy. It differs from `if/else` because it is shorter
- What is the `?.` (optional chaining) operator? When would you use it?
  The `?.` optional chaning operator checks if a property of an object exists and returns the value of that property it is does, if not it returns undefined
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  The `...` spread syntax is a short way to create new arrays using existing ones
- What data types can be spread into an array? Into an object?
  For arrays an iterable object can be spread into an array. For objects, an object can be spread into an array.
- How does spread syntax differ from rest syntax?
  The spread syntax is similar but the rest syntax is used for parameters and the spread syntax is used for arguments

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
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
