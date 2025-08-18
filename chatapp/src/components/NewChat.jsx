import users from "../db//users.json"
import {Popup} from 'reactjs-popup';
import { useNavigate } from "react-router-dom"
import { Navigate  } from 'react-router-dom'
import Chat from "./Chat";

function NewChat () {

   const navigate = useNavigate()

    return (
        <>
        {console.log(window.LOGINUSER)}
        {window.LOGINUSER === true ? 
        <div>
          <h1>New Chat</h1>
  
          {users.map(u => {

            return (
              <div key={u.id}>
                {u.status === true ? <h3 key={u.id}> {u.user}</h3> : " "}
                {u.status === true ? <h5>{u.status == true ? "online" : "offline"}</h5> : " "}
                {u.status === true ? <button onClick={() => window.open(`${window.location.origin}/chat`, '_blank')} disabled={u.status == false}>Chat</button> : " "}
              </div>              
            )
          }
          )}
        </div>
        : <Navigate to='/'/>}
        </>
    )
}

export default NewChat