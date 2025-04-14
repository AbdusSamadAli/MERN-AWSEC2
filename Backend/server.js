const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Enable CORS for all origins
const corsOptions = {
  origin: ['http://13.234.200.213:5050', 'http://13.234.200.213:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};
app.use(cors(corsOptions));

// Parse incoming JSON
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);

// Serve static frontend files
const __dirnamePath = path.resolve(__dirname, '../Frontend/my-react-app/dist');
app.use(express.static(__dirnamePath));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirnamePath, 'index.html'));
});
app.get('/health', (req, res) => {
  res.status(200).send('Healthy');
});
// Start the server on all IPs at port 5050
app.listen(5050, '0.0.0.0', () => {
  console.log('✅ Server running at http://13.234.200.213:5050');
});

