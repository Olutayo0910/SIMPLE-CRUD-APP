/**
 * This module defines the routes for handling Olutayo-related requests.
 * These routes are responsible for fetching Olutayo data from the database.
 */

const express = require('express')
const router = express.Router()
const Olutayo = require('../models/olutayo')

/**
 * GET /olutayo
 * Fetches all Olutayo data from the database.
 * Responds with a JSON array containing the Olutayo documents.
 * If an error occurs during the database operation, sends an error message in the response.
 */
router.get('/', async (req, res) => {
    try {
        const olutayo = await Olutayo.find()
        res.json(olutayo)
    } catch (err) {
        res.send('Error ' + err)
    }
})

module.exports = router