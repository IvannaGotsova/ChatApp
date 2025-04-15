import styles from '../css/Body.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Body () {

  const navigate = useNavigate()
  
    return (
        <>
          <div className={styles.bodyStyle}>
            <h3>Start a chat with online users</h3>
            <button onClick={() => navigate('/new-chat')}>New Chat</button>
            <h3>See all chat app users</h3>
            <button onClick={() => navigate('/all-users')}>All Users</button>
          </div>
        </>
    )
}

export default Body