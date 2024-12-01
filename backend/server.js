const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/userRoute'); // Import the user route

dotenv.config();

// Your MongoDB connection string 
const mongoURI = process.env.MONGO_URI;

// Middleware setup
app.use(cors());
app.use(express.json()); 

// Define routes
app.use("/api/auth", userRoute);

// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Optionally, monitor connection status
mongoose.connection.on('connected', () => {
  console.log('MongoDB connected via Mongoose.');
});

mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected.');
});

// Root route
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});