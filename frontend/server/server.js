const http = require('http');
const path = require('path');
const express = require('express');
const app = express();

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Handle all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
