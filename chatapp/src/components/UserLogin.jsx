import React, { useState, createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import users from "../db//users.json"
import Body from "./Body";


function UserLogin () {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [statusUser, setStatusUser] = useState(false)
  const [loginUser, setLoginUser] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const onClickAfterLogin = () => {

    const findUser = users.find((u) => u.user === username && u.password.toString() === password)

    if (findUser) {

      navigate("/index")
      setError("SUCCESS")
      setStatusUser()
      setLoginUser(true)
      (findUser.login = true)
    } else {
      setError("INVALID USER")
      setStatusUser(false)
    }

    useEffect(() => {
      console.log("StatusUser updated:", statusUser)
      console.log("LoginUser updated:", loginUser)
    }, [statusUser, loginUser])

  }

  return (
    <>
        <h3>Username and password are required</h3>
        <input type="text" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <button onClick={onClickAfterLogin}>Login</button>
        <br />
        {error}
    </>
  )

}



export default UserLogin
