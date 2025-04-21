import styles from '../css/Body.module.css'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { createContext, useContext } from 'react';
import { Navigate  } from 'react-router-dom'

const UserContext = createContext();

function Body () {

  const userLogin = useContext(UserContext)
  console.log(userLogin)
  const navigate = useNavigate()
  
    return (
        <>
          <div className={styles.bodyStyle}>
            {userLogin === true ? <h3>Start a chat with online users</h3> : <Navigate to='/error'/>}
            {userLogin === true ? <button onClick={() => navigate('/new-chat')}>New Chat</button> : <Navigate to='/error'/>}
            {userLogin === true ? <h3>See all chat app users</h3> : <Navigate to='/error'/>}
            {userLogin === true ? <button onClick={() => navigate('/all-users')}>All Users</button> : <Navigate to='/error'/>}
          </div>
        </>
    )
}

export default Body