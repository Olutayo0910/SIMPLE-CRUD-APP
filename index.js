const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/OlutayoDB'

const app = express()

mongoose.connect(url)
const con = mongoose.connection

con.on('open', function(){
    console.log('Testing connection')
})

const olutayoRouter = require('./routes/olutayo')
app.use('/olutayo', olutayoRouter)

app.listen(9000, () => {
    console.log('server started')
});