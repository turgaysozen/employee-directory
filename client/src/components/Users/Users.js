import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import './Users.css'
import { getUsers } from './getUsers';

export default function Users({ userCount, totalUserCount }) {
    const [users, setUsers] = useState([]);
    const [initialUsers, setInitialUsers] = useState(true)
    const [isNextPage, setIsNextPage] = useState(false)
    const [initialPage, setInitialPage] = useState(1)
    const [pageNumber, setPageNumber] = useState(1)
    const [query, setQuery] = useState("")
    const pageNumbers = [];

    // find total required pages
    for (let i = 1; i <= Math.ceil(totalUserCount / userCount); i++) {
        pageNumbers.push(i);
    }

    // set initial users as default page 1
    useEffect(() => {
        (async () => {
            if (initialUsers) {
                let usersData = await getUsers(initialPage)
                setUsers(usersData.data)
                setInitialUsers(false)
                setIsNextPage(true)
            }
        })()
    })

    // navigate the pages and fetch users
    if (isNextPage && initialPage !== pageNumber) {
        (async () => {
            let usersData = await getUsers(pageNumber)
            setUsers(usersData.data)
            setInitialPage(pageNumber)
        })()
    }

    return (
        <>
            <div style={{marginTop: '100px'}}>
                <h3>Users</h3><br></br>
                <input style={{marginBottom: "5px", width: "40%"}} placeholder='Search User' onChange={(e) => setQuery(e.target.value)}/>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Avatar</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        {
                            users.filter(user => user.email.includes(query.trim())).map(user => {
                                return (
                                    <tbody key={user.id}>
                                        <tr>
                                            <td>{user.first_name}</td>
                                            <td>{user.last_name}</td>
                                            <td>{user.email}</td>
                                            <td><img alt='' height='55px' width='55px' src={user.avatar}></img></td>
                                            <td><Link to={`users/${user.id}`} state={{ user }}>Details</Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
            <div className='pagination'>
                <nav>
                    <ul className="pagination">
                        {pageNumbers.map(number => (
                            <li className="page-item" key={number}>
                                <button
                                    onClick={() => setPageNumber(number)}
                                    className="page-link"
                                >
                                    {number}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}
