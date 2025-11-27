# DEVZONE Backend API Documentation

## Overview
DEVZONE is a search platform API built with Node.js/Express.

## Endpoints

### Search
- **GET** `/api/search?query=<search_term>`
  - Description: Get search results
  - Query Parameters:
    - `query` (required): Search term
  - Response: `{ success: true, data: [...], query: "..." }`

- **GET** `/api/search/suggestions?term=<search_term>`
  - Description: Get search suggestions/autocomplete
  - Query Parameters:
    - `term` (required): Search term for suggestions
  - Response: `{ success: true, suggestions: [...] }`

- **POST** `/api/search`
  - Description: Create a new search
  - Body: `{ query: "..." }`
  - Response: `{ success: true, message: "...", query: "..." }`

### Health Check
- **GET** `/health`
  - Description: Check if server is running
  - Response: `{ status: "OK", message: "Backend is running" }`

## Installation & Setup

1. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

2. Create a `.env` file from `.env.example`:
   \`\`\`bash
   cp .env.example .env
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

## Project Structure

- **routes/** - API route definitions
- **controllers/** - Business logic for routes
- **models/** - Database models (Mongoose schemas)
- **middleware/** - Custom middleware functions
- **config/** - Configuration files (database, etc.)
- **utils/** - Utility functions and helpers
- **tests/** - Unit and integration tests
- **docs/** - API documentation

## Frontend Connection

The frontend (in the parent directory) connects to this backend via:
- **Base URL**: `http://localhost:5000`
- **Search endpoint**: `http://localhost:5000/api/search?query=<term>`

## Environment Variables

See `.env.example` for all required variables.

## Contributing

- Follow the existing folder structure
- Add tests for new features
- Update this documentation when adding endpoints
