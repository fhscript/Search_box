/**
 * Search Routes
 * Handles all search-related API endpoints
 */

const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// GET search results
router.get('/', searchController.getSearchResults);

// POST search query (alternative method)
router.post('/', searchController.createSearch);

// GET search suggestions
router.get('/suggestions', searchController.getSuggestions);

module.exports = router;
