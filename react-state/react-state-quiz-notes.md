# react-state-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are _hooks_ in React?
  - Hooks start are functions that are available when react is rendering
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  - Hooks need to be at the top level of the component. Hooks cannot be inside conditions, loops, or other nested functions
- What is the purpose of state in React?
  - State is used to store a value between renders
- Why can't we just maintain state in a local variable?
  - Because local variables don't persist between renders
- What two actions happen when you call a `state setter` function?
  - A `state setter` function stores a value in `state` for the next render
- When does the local `state variable` get updated with the new value?
  - It gets updated with the new variable during the next render

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
