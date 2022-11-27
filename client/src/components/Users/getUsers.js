import axios from 'axios';

// fetch users from backend service
export let getUsers = async (page) => {
    const apiUrl = process.env.REACT_APP_API_URL
    const url = `${apiUrl}users?page=${page}`
    const res = await axios(url)
    return res.data
}