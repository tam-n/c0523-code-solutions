# react-effects-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- When is a component "mounted" to the DOM?
  - When it appears on the screen for the first eim
- What is a React Effect?
  - A React effect is a function that is executed after a component has rendered.
- When should you use an Effect and when should you not use an Effect?
  - You should use effect when you want the effect to be executed based on a change in the dependency
- When do Effects run?
  - It is based on the dependency. It no dependencies are declared, then it is after every render. If it is an empty array then it is once. If there are dependencies then it is after a change in the dependecies.
- What function is used to declare an Effect?
  - `UseEffect`
- What are Effect dependencies and how do you declare them?
  - Effect dependencies determine when the effect should be re-run. You declare them in the second argument of the useEffect.
- Why would you want to clean up from an Effect?
  - You want to clean up from an effect to optimize performance.
- How do you clean up from an Effect?
  - You clean up from an effect by returning a cleanup function in the `useEffect`
- When does the cleanup function run?
  - cleanup functions run before the Effect runs again

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
