/**
 * Import the Express framework module.
 * Express is a web application framework for Node.js that provides a set of features for building web applications and APIs.
 */
const express = require('express')

/**
 * Import the Mongoose library for MongoDB interactions.
 * Mongoose is an Object Data Modeling (ODM) library for MongoDB and is commonly used with Node.js to interact with MongoDB databases.
 */
const mongoose = require('mongoose')

/**
 * Define the MongoDB connection URL.
 * Specifies the location of the MongoDB server (localhost) and the name of the database (OlutayoDB) that the Node.js application will connect to.
 */
const url = 'mongodb://localhost/OlutayoDB'

/**
 * Create an instance of the Express application.
 * The app variable represents the Express application, which is used to configure routes, middleware, and other settings.
 */
const app = express()

/**
 * Connect to the MongoDB database using Mongoose.
 * Establishes a connection to the MongoDB server specified by the url variable and selects the OlutayoDB database for use by the Node.js application.
 */
mongoose.connect(url)

/**
 * Get the default connection.
 * The con variable holds a reference to the Mongoose connection object, which can be used to listen for events and interact with the database connection.
 */
const con = mongoose.connection

/**
 * Event listener for successful connection to the MongoDB database.
 * When the connection to the MongoDB database is successfully established, log a message indicating successful connection.
 */
con.on('open', function(){
    console.log('Testing connection')
})

/**
 * Import the router module defined in ./routes/olutayo.js.
 * The olutayoRouter variable holds the router module, which defines routes for handling Olutayo-related requests.
 */
const olutayoRouter = require('./routes/olutayo')

/**
 * Mount the olutayoRouter to handle requests starting with '/olutayo'.
 * Specifies that all requests starting with the '/olutayo' path should be handled by the olutayoRouter router module.
 */
app.use('/olutayo', olutayoRouter)

/**
 * Start the Express server and listen for incoming HTTP requests on port 9000.
 * When the server starts successfully, log a message indicating server startup.
 */
app.listen(9000, () => {
    console.log('server started')
});