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

router.get('/:id', async (req, res) => {
    try {
        const olutayo_id = await Olutayo.findById(req.params.id)
        res.json(olutayo_id)
    } catch (err) {
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
        const olutayo = new Olutayo({
            name: req.body.name,
            age: req.body.age,
            description: req.body.description,
            available: req.body.available
        })
    try {
        const n1 = await olutayo.save()
        res.json(n1)
    }catch (err) {
        res.send('Error ' + err)
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const olutayo_id = await Olutayo.findById(req.params.id)
        olutayo_id.available = req.body.available
        const n1 = await olutayo_id.save()
        res.json(n1)

    } catch (err) {
        res.send('Error ' + err)
    }
})
module.exports = router