/**
 * Logger Utility
 * Simple logging utility for the backend
 */

const log = {
    info: (message) => {
        console.log(`[INFO] ${new Date().toISOString()}: ${message}`);
    },
    error: (message, error) => {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`, error);
    },
    warn: (message) => {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }
};

module.exports = log;
