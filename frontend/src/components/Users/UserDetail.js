import React from "react"
import { useLocation } from 'react-router-dom';

function UserDetail() {
    const { state } = useLocation()
    const user = state.user

    return (
        <div>
            <div style={{ marginTop: '100px', width: '250px', height:'270px', border: '1px solid'}} className="userDetail">
                {user.first_name} {user.last_name}
                <div>{user.email}</div>
                <div><img alt='' style={{marginTop: '10px', borderRadius: '50%' }} height='200px' width='200px' src={user.avatar}></img></div>
            </div>
        </div>
    )
}

export default UserDetail