import React, { useState, createContext, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import users from "../db//users.json"
import Body from "./Body";

const UserContext = createContext();

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
      setStatusUser(true)
      setLoginUser(true)
      console.log(findUser.login)
    } else {
      setError("INVALID USER")
      setStatusUser(false)
    }

  }

  useEffect(() => {
    console.log("StatusUser updated:", statusUser)
    console.log("LoginUser updated:", loginUser)
  }, [statusUser, loginUser])


  return (
    <>
      <UserContext.Provider value={loginUser}>
        <h3>Username and password are required</h3>
        <input type="text" placeholder="Your Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br />
        <input type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br /><br />
        <button onClick={onClickAfterLogin}>Login</button>
        <br />
        {error}
      </UserContext.Provider>
    </>
  )

}



export default UserLogin
