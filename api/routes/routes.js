const express = require('express')
const router = express.Router()

const getUser = require('../utils/external_calls')

router.get('/users', async (req, res) => {
    const { page } = req.query
    const users = await getUser(page)
    res.send(users)
})

module.exports = router;
