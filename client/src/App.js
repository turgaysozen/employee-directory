import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Users from '../src/components/Users/Users';
import { getUsers } from '../src/components/Users/getUsers';
import UserDetail from '../src/components/Users/UserDetail';

function App() {
  const [userCount, setUserCount] = useState()
  const [totalUser, setTotalUser] = useState()
  const [, setUsers] = useState()

  // get users count per page, total count and pass them to User component
  useEffect(() => {
    (async () => {
      const defaultPage = 1
      const users = await getUsers(defaultPage)
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
