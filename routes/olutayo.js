// Import the Express framework module
const express = require('express')

// Create a new router instance using the Express Router() method
const router = express.Router()

// Import the Olutayo model from the '../models/olutayo' file
const Olutayo = require('../models/olutayo')

// Define a route handler for the HTTP GET request to the '/' endpoint
router.get('/', async(req, res) => {
    try{
        // Attempt to find all documents in the Olutayo collection
        const olutayo =  await Olutayo.find()
        
        // Send a JSON response containing the found documents
        res.json(olutayo)
    }catch(err){
        // If an error occurs, send an error message in the response
        res.send('Error ' + err)
    }
})

// Export the router module to make it available for use in other files
module.exports = router