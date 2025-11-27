/**
 * DEVZONE Backend Server
 * Main entry point for the Node.js/Express backend
 */

require('dotenv').config(); // Load environment variables
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors()); // Enable CORS for frontend communication
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Static files (if needed)
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const searchRoutes = require('./routes/search');
const apiRoutes = require('./routes/api');

app.use('/api/search', searchRoutes);
app.use('/api', apiRoutes);

// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Backend is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;
