require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple test endpoint
app.get('/api/data', (req, res) => {
  res.json([
    { id: 1, message: 'Hello from client-app1 backend!' }
  ]);
});

app.listen(port, () => {
  console.log(`Client-app1 backend running on port ${port}`);
});
