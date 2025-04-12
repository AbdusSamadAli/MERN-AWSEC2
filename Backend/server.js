const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

connectDB();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Serve frontend
const __dirnamePath = path.resolve();
app.use(express.static(path.join(__dirnamePath, 'client', 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnamePath, 'client', 'build', 'index.html'));
});
// Start the server
app.listen(5050, '0.0.0.0', () => console.log("Running on 0.0.0.0:5050"));
