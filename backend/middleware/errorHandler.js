/**
 * Error Handler Middleware
 * Centralized error handling for the API
 */

const errorHandler = (err, req, res, next) => {
    console.error(err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: {
            status: statusCode,
            message: message
        }
    });
};

module.exports = errorHandler;
