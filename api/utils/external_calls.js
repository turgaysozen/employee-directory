
const getUser = async (page) => {
    const res = await fetch(`${process.env.REGRES_URL}/api/users?page=${page}`)
    const users = await res.json()
    return users
}

module.exports = getUser