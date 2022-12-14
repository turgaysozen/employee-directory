const initRedisClient = require('../redis')
const logger = require('../logger')

// fetch users from the source and cache it
const getUser = async (req, res) => {
    const { page } = req.query
    const response = await fetch(`${process.env.REGRES_URL}/api/users?page=${page}`)
    const users = await response.json()
    const key = `page_${page}`
    await (await initRedisClient).setEx(key, process.env.TTL, JSON.stringify(users))
    logger.info(`users data are stored to the cache for page: ${page}`)
    res.send(users)
}

module.exports = getUser