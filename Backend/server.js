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
  origin: ['http://13.234.200.213:5050', 'http://13.234.200.213:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

app.use(express.json());
app.use('/api/auth', authRoutes);

const __dirnamePath = path.resolve(__dirname, 'public');
app.use(express.static(__dirnamePath));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnamePath, 'index.html'));
});

app.listen(5050, '0.0.0.0', () => {
  console.log('✅ Server running at http://13.234.200.213:5050');
});

