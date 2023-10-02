import React, { useState } from 'react'
import axios from 'axios';

function Register() {

    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ pass, setPass ] = useState();
    const [ mobile, setMobile ] = useState();

     const data = {name,email,pass,mobile}
    const  handlSubmit = () =>{
        
          axios.post('http://localhost:3000/user1',data)
          .then(Response=>{
           console.log(Response.data);
        })
          
    }

    return (
        <>
            <div className='forms1'>
                <form onSubmit={ handlSubmit } className='forms'>
                    <input type="text" placeholder='User Name' defaultValue={ name } onChange={ (e) => setName(e.target.value) } />
                    <br />
                    <input type="Email" placeholder='Email' defaultValue={ email } onChange={ (e) => setEmail(e.target.value) } />
                    <br />
                    <input type="password" placeholder='Password' defaultValue={ pass } onChange={ (e) => setPass(e.target.value) } />
                    <br />
                    <input type="Mobile" placeholder='Password' defaultValue={ mobile } onChange={ (e) => setMobile(e.target.value) } />
                    <br />
                  
                    <br />
                    <button className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Register
