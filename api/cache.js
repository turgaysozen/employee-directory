const initRedisClient = require('./redis')
const logger = require('./logger')

// cache middleware - read users from the cache for 30 mins.
async function cache(req, res, next) {
    const { page } = req.query
    const users = await (await initRedisClient).get(`page_${page}`)
    if (users !== null) {
        logger.info(`users data are getting from cache for page: ${page}`)
        res.send(users)
    } else {
        logger.info(`there isn't user data in cache for page ${page}`)
        next()
    }
}

module.exports = cache