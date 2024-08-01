const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file located at /app
dotenv.config({ path: path.resolve(__dirname, '../.env') });


// Initialize the Express app
const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server on the port specified in the environment variables
const PORT = process.env.FRONT_END_PORT || 3000; // Fallback to 3000 if not set
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
