import axios from 'axios';

// fetch users from backend service
export let getUsers = async (page) => {
    const address = process.env.REACT_APP_ROOT_URL
    const endpoint = process.env.REACT_APP_END_POINT
    const port = process.env.REACT_APP_PORT
    const url = `${address}:${port}${endpoint}/users?page=${page}`
    const res = await axios(url)
    return res.data
}