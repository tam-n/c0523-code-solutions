import express from 'express';

let nextId = 1;
const grades = {};

const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  if (!newGrade.name || !newGrade.course || !newGrade.score) {
    res.status(400).send('Incomplete request');
  } else {
    newGrade.id = nextId++;
    grades[newGrade.id] = newGrade;
    res.status(200).json(newGrade);
  }
});

app.listen(8080, () => {
  console.log('Listening for port 8080.');
});
