const redis = require('redis')
const logger = require('./logger')

// create redis client
async function initRedisClient() {
    try {
        const redisPort = process.env.REDIS_PORT
        const client = redis.createClient({ url: `redis://redis:${redisPort}` });
        client.on("connect", () => logger.info(`connected to redis`));
        client.on("error", (err) => logger.error("redis client connection error"));
        await client.connect();
        return client;
    } catch (error) {
        logger.error('redis app connection error...', error);
    }
}

module.exports = initRedisClient()
