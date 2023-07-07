# es6-async-await-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the `async` and `await` keywords used for?
  - `async` and `await` keywords are used for asynchronous programming.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  - `async` and `await` differ from `promise.then` and `promise.catch` in that it provides a more concise syntax that is readable and more like synchronous
- When do you use `async`?
  - When you are define an asynchronous function
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  - You use `await` inside an `async` function and when you are dealing with promises. Do not use `await` outside of `async` functions. If you use `await` on a synchronous function it will have no effect.
- How do you handle errors with `await`?
  - By wrapping `await` in a `try/catch` block
- What do `try`, `catch` and `throw` do? When do you use them?
  - `try` is used to wrap `await` function calls where errors are expected to happen, `catch` is used to handle errors if one occurs, and `throw` is used to manually throw an error, stopping the current execution of the code block and passing the control to the `catch` block
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  - If you forget to use `await` on a promise the async function will execute subsequent lines of code leading to unexpected errors. Promise rejection will also be unhandled and go unnoticed.
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  - `Async/await` because it is concise and easier to read.

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
