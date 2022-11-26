const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

const helmet = require('helmet')
const routes = require('./routes/routes')

require('dotenv').config()

const app = express();

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api', routes)

const PORT = process.env.BACKEND_PORT

app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`)
})

module.exports = app