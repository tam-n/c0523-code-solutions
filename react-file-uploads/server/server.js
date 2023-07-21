import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import ClientError from './lib/client-error.js';
import errorMiddleware from './lib/error-middleware.js';
import uploadsMiddleware from './lib/uploads-middleware.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post(
  '/api/uploads',
  uploadsMiddleware.single('image'),
  async (req, res, next) => {
    try {
      const { caption } = req.body;
      if (!caption) {
        throw new ClientError(400, 'caption is a required field');
      }
      const url = `/images/${req.file.filename}`;

      const insertQuery = `
        INSERT INTO "images" ("url", "caption")
        VALUES ($1, $2)
        RETURNING *;
      `;

      const values = [url, caption];
      const result = await db.query(insertQuery, values);

      const insertedRow = result.rows[0];
      res.status(201).json(insertedRow);
    } catch (err) {
      next(err);
    }
  }
);

app.get('/api/images', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "images"
      `;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
