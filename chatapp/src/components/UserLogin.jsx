import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import users from "../db//users.json"

const UserLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [status, setStatus] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const onClickAfterLogin = () => {
    const findUser = users.find((u) => u.user === username && u.password.toString() === password)

    if (findUser) {
      navigate("/")
      setError("")
      setStatus(true)
    } else {
      setError("Invalid User");
    }
  }

  return (
    <>
      <h3>Username and password are required</h3>
      <input type="text" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
      <br />
      <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      <br />
      <button onClick={onClickAfterLogin}>Login</button>
      <br />
      {error}
    </>
  )
}

export default UserLogin
