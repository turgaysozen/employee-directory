const redis = require('redis')

async function initRedisClient() {
    try {
        const redisPort = process.env.REDIS_PORT
        const client = redis.createClient({ url: `redis://redis:${redisPort}` });
        client.on("connect", () => console.log(`connected to redis`));
        client.on("error", (err) => console.log("Redis Client Connection Error"));
        await client.connect();
        console.log("Redis cashe app database connected...");
        return client;
    } catch (error) {
        console.log('Redis app connection Error...', error);
    }
}

module.exports = initRedisClient()
