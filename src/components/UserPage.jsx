import React from 'react'
import Login from './Login.jsx'
import Register from './Register.jsx'


function UserPage() {
  return (
    <div className="userBox">
        <Register/>
        <Login />
    </div>
    )
}

export default UserPage
