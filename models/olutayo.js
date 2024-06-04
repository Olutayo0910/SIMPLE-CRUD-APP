/**
 * Require the Mongoose library.
 * Mongoose provides a schema-based solution for modeling application data and interacting with MongoDB databases.
 */
const mongoose = require('mongoose')

/**
 * Define the schema for the 'olutayo' collection.
 * The schema specifies the structure of documents within the collection and defines the data types and validation rules for each field.
 */
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

/**
 * Create and export the Mongoose model for the 'olutayo' collection.
 * Models are constructor functions that create instances of documents to be stored in MongoDB.
 * Exporting the model makes it available for use in other parts of the application.
 */
module.exports = mongoose.model('olutayo', olutayoSchema)
