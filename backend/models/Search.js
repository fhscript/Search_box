/**
 * Search Model
 * Define the schema for storing search data
 */

const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
    query: {
        type: String,
        required: true,
        trim: true
    },
    results: [{
        title: String,
        description: String,
        link: String,
        // Add more fields as needed
    }],
    userId: {
        type: String,
        default: null
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Search', searchSchema);
