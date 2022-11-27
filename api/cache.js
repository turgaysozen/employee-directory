const initRedisClient = require('./redis')

async function cache(req, res, next) {
    const { page } = req.query
    const users = await (await initRedisClient).get(`page_${page}`)
    if (users !== null) {
        res.send(users)
    } else {
        next()
    }
}

module.exports = cache