import express, { json } from 'express';
import { createConnection } from 'mysql';
import cors from 'cors';
const app = express();
const port = 3309;

// Middleware
app.use(cors());
app.use(json());

// Setup koneksi database
const db = createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'users_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// API Endpoints
  
// Get all users
app.get('/api/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Create new user
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], (err, result) => {
    if (err) throw err;
    res.json({ id: result.insertId, name, email });
  });
});

// Delete user by id
app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
    if (err) throw err;
    res.sendStatus(204);
  });
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
