import express from 'express';

let nextId = 1;
const grades = {};

const app = express();

app.get('/api/grades', (req, res) => {
  res.json(grades);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId++;
  grades[newGrade.id] = newGrade;
  res.status(200).json(grades);
});

app.listen(8080, () => {
  console.log('Listening for port 8080.');
});
