const express = require('express')
const router = express.Router()

const getUser = require('../utils/external_calls')
const cache = require('../cache')

// router.get('/users', async (req, res) => {
//     const { page } = req.query
//     const users = await getUser(page)
//     res.send(users)
// })

router.get('/users', cache, getUser)

module.exports = router;
