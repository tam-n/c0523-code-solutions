# sql-mutations-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What are the SQL _CRUD_ operations?
  - `Insert`, `Select`, `Update`, `Delete`
- How do you add a row to a SQL table?
  - `Insert into` name_of_table ("column", "column")
    `values` ('name', 'title')
- How do you add multiple rows to a SQL table at once?
  - By adding more `values` in another set of parenthesis
- How do you update rows in a database table?
  - Using `update`
- How do you delete rows from a database table?
  - Using `delete`
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  - If a `where` clause is not specified then everything in the table gets updated or deleted
- How do you accidentally delete or update all rows in a table?
  - By not including a `where` clause
- How do you get back the modified row without a separate `select` statement?
  - Using the `returning` statement

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
