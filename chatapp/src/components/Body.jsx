import styles from '../css/Body.module.css'
import React from 'react'
import { useNavigate } from "react-router-dom"
import { Navigate  } from 'react-router-dom'
import users from "../db//users.json"


function Body () {

  const navigate = useNavigate()

    return (
        <>
        {window.LOGINUSER === true ? 
          <div className={styles.bodyStyle}>
            <h3>Start a chat with online users</h3> 
            <button onClick={() => navigate('/new-chat')}>New Chat</button> 
            <h3>See all chat app users</h3> 
            <button onClick={() => navigate('/all-users')}>All Users</button> 
          </div> 
        : <Navigate to='/'/>}
        </>
    )
}

export default Body