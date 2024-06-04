// Require the Mongoose library
const mongoose = require('mongoose')

// Define the schema for the 'olutayo' collection
const olutayoSchema = new mongoose.Schema({
    // Define the 'name' field with type String and required validation
    name: {
        type: String,
        required: true
    },
    // Define the 'age' field with type Number and required validation
    age: {
        type: Number,
        required: true
    },
    // Define the 'description' field with type String and required validation
    description: {
        type: String,
        required: true
    },
    // Define the 'available' field with type Boolean, required validation, and a default value of false
    available: {
        type: Boolean,
        required: true,
        default: false
    }
})

// Create and export the Mongoose model for the 'olutayo' collection
module.exports = mongoose.model('olutayo', olutayoSchema)
