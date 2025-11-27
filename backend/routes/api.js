/**
 * General API Routes
 * Add other general endpoints here
 */

const express = require('express');
const router = express.Router();

// Add your routes here
router.get('/status', (req, res) => {
    res.json({ status: 'API is running' });
});

module.exports = router;
