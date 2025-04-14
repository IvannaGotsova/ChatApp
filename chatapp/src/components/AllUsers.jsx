import users from "../db//users.json"
import {Popup} from 'reactjs-popup';

function AllUsers () {


    return (
        <>
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
              </div>
            )
          }

          )}
        </>
    )
}

export default AllUsers

