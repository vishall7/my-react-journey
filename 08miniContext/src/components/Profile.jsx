import React, { useContext } from 'react'
import UserContext from '../context/UserContext' 

function Profile() {

    const {user} = useContext(UserContext);

    if (!user) return <div>Login to view profile</div>

    return (
        <div>
            <h2>Profile</h2>
            <p>Welcome {user.username}</p>
            <p>youre password is {user.password}</p>
        </div>
    )
}

export default Profile

