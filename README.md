# SIMPLE-CRUD-API

This Node.js application provides a CRUD (Create, Read, Update, Delete) API for managing Olutayo data. It uses Express.js for routing, Mongoose for interacting with MongoDB, and follows RESTful principles for API design.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/SIMPLE-CRUD-APP.git

2. Install dependencies:
    ```bash
    npm install

3. Start the server:
    ```bash
    npm start

## Usage

The API provides the following endpoints:

- `GET /olutayo`: Fetch all Olutayo data from the database.
- `GET /olutayo/:id`: Fetch a specific Olutayo document by ID.
- `POST /olutayo`: Create a new Olutayo document.
- `PATCH /olutayo/:id`: Update the `available` field of a specific Olutayo document.

## Database Schema
The Olutayo model is defined with the following schema:
    
    ```bash
    const mongoose = require('mongoose');

    const olutayoSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        available: {
            type: Boolean,
            required: false,
            default: false
        }
    });

    module.exports = mongoose.model('Olutayo', olutayoSchema);

## Routes

The routes for handling Olutayo-related requests are defined in the `routes/olutayo.js` file. These routes interact with the MongoDB database using Mongoose.

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.