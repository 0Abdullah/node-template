// express
const express = require('express');
const app = express()
// cors
var cors = require('cors');
// http request library
const request = require('request');


// use static files (html, css, js) from /public
app.use(express.static("public"))
// use cors
app.use(cors())

// endpoints here

// listen on heroku port, fallback 3000 for local testing
app.listen(process.env.PORT || 3000, () => {
    console.log('server is running...')
})
