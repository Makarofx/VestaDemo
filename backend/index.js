const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/vesta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();

// CORS middleware
const corsOptions = {
  origin: 'http://localhost:4200', // Replace with your Angular app's URL
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the MEAN Stack Backend');
});

// Example API route
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
