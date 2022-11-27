const express = require('express');
const morgan = require('morgan')
const cors = require('cors')
const logger = require('./logger')
const helmet = require('helmet')
const routes = require('./routes/routes')

require('dotenv').config()

const app = express();

// middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api', routes)

app.listen(process.env.PORT, () => {
    logger.info(`Server Started at ${process.env.PORT}`)
})

module.exports = app