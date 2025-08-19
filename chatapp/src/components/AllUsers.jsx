import users from "../db//users.json"
import {Popup} from 'reactjs-popup';
import { useNavigate } from "react-router-dom"
import { Navigate  } from 'react-router-dom'

function AllUsers () {

    const navigate = useNavigate()

    return (
        <>
        {console.log(window.LOGINUSER)}
        {window.LOGINUSER === true ?
        <div>
          <h1>All Users</h1>
  
            {users.map(u => {
            
              return (
                <div key={u.id}>
                  <h3 key={u.id}> {u.user}</h3>
                  <h5>{u.status == true ? "online" : "offline"}</h5> 
                  <Popup trigger=
                    {<button>Details</button>} position="right">
                    <div style={{color: "black", backgroundColor: "lightgray"}}>
                      <p key={u.id}>User: {u.user}</p>
                      <p>{u.status.toString()}</p>
                      <p>{u.status == true ? "online" : "offline"}</p>
                      <p>City: {u.city}</p>
                      <p>Country: {u.country}</p>
                      <p>Age: {u.age}</p>
                      <p>Job: {u.job}</p>
                      <p>Hobby: {u.hobby}</p>
                      <p>Other: {u.other}</p>
                    </div>
                  </Popup>
                  <button onClick={() => navigate('/chat')} disabled={u.status == false}>Chat</button>
                </div>
              )
            }
          )}
        </div>
        : <Navigate to='/'/>}      
        </>
    )
}

export default AllUsers

