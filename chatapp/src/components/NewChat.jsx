import users from "../db//users.json"
import {Popup} from 'reactjs-popup';
import { useNavigate } from "react-router-dom"

function NewChat () {
    return (
        <>
          <h1>New Chat</h1>

          {users.map(u => {

            return (
              <div key={u.id}>
                {u.status === true ? <h3 key={u.id}> {u.user}</h3> : " "}
                {u.status === true ? <h5>{u.status == true ? "online" : "offline"}</h5> : " "}
                {u.status === true ? <button onClick={() => navigate('/new-chat')} disabled={u.status == false}>Chat</button> : " "}
              </div>
            )
          }

          )}
          
        </>
    )
}

export default NewChat