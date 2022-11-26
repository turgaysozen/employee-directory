import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Users from './Users/Users';
import { getUsers } from '../src/Users/getUsers';
import UserDetail from './Users/UserDetail';
import { useParams } from "react-router-dom"

function App() {
  const [userCount, setUserCount] = useState()
  const [totalUser, setTotalUser] = useState()
  const [users, setUsers] = useState()

  // get users count per page, total count and pass them to User component
  useEffect(() => {
    (async () => {
      const users = await getUsers()
      setUserCount(users.per_page)
      setTotalUser(users.total)
      setUsers(users.data)
    })()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Users userCount={userCount} totalUserCount={totalUser} />}></Route>
            <Route path='users/:id' element={<UserDetail />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
