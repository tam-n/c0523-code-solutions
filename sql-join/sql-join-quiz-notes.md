# sql-join-quiz-notes

## Quiz Questions

After completing this exercise, you should be able to discuss or answer the following questions:

- What is a foreign key?
  - It is a unique identifer that refers to a keys for another table
- How do you join two SQL tables? (Provide at least two syntaxes.)
  - By using `table1` on `table2`.`column` = `table2`.`column` or `FROM` `table1` `JOIN` `table2` USING (`column`)
- How do you temporarily rename columns or tables in a SQL statement?
  - Using the `as` keyword
- How do you create a one-to-many relationship between two tables?
  - By establishing a foreign key constraint
- How do you create a many-to-many relationship between two tables?
  - By creating an intermediary table that represents the relationship itself

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
