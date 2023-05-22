# dom-events-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- Why do we log things to the console?
  To check if we have our intended value
- What is the purpose of events and event handling?
  Events and event handling produces an action to be automatically taken
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener
- What is a callback function?
  A function called within a function
- What object is passed into an event listener callback when the event fires?
  The document object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  It is the target property of the document object. If you weren't sure you can console log it to check on the browser console
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  One is a variable and the other is a function

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
