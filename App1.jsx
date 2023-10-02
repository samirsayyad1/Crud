import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Apps from './Apps.css'
import Put from './Put.jsx' 
// import Put from './Put'
// import { NavLink } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Delete from './Delete';

function App1(id) {

  const [ data, setData ] = useState([]);

  useEffect((e)=>{
    axios.get('http://localhost:3000/user1')
      .then(Response => {
        setData(Response.data)
        // alert('say')
      })
      .catch((err) => {
        console.log('This is a page...', err);
      })
  })

  return (
    <>
      <table className='user_data'>
        <tr>
          {/* <th>Id</th> */}
          <th>Name</th>
          <th>Email</th>
          <th>Pass</th>
          <th>Mobile</th>
          <th>Edit</th>
           <th>Remove</th> 
        </tr>
        {
          data.map((item) => {
            return (
              <tr>
                <td>{ item.name}</td>
                <td>{ item.email}</td>
                <td>{ item.pass }</td>
                <td>{ item.mobile }</td>

                <td>
                  {/* <button className='btn btn-primary' href={`/Put/${item.id}`}>Edit</button> */}
                  <NavLink className=" m-2" to={ `/Put/${item.id}` }>
                    <button className='btn btn-primary'>Edit</button>
                  </NavLink>

                </td>
                <td>
                    {/* <button className='btn btn-danger'>Remove</button> */}
                    <NavLink className="" to={ `/Delete/${item.id}` }>
                      <button className='btn btn-danger'>Remove</button>
                    </NavLink>

                  </td>
                 
              </tr>
            )
          })
        }
        {/* <button onClick={ update } className='btn btn-info'>update</button> */}
      </table>

                    {/* <button><Put/></button> */}

    </>
  )
}

export default App1


