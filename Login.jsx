
import React, { useState } from 'react'
import axios from 'axios'

function Login() {

const [ loginData, setLoginData ] = useState({
    email: '',
    pass: '',

});


   const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData({ ...loginData, [ name ]: value });
};

   const handlSubmit = (e) =>{
      
       e.preventDefault();
       axios.get('http://localhost:3000/user1')
       .then(Response=>{

          const users = Response.data;
          const matchedUser = users.find((user) => user.email === loginData.email && user.pass === loginData.pass);

          if(matchedUser){
           alert('Login sucessfully...')
        }
        else{
            alert('Invalid username or password...')
        }
       })

   }
  return (
    <>
       <div className='forms1'>
       <form onSubmit={handlSubmit} className='forms'>
             <input type="text" placeholder='User Name' name={loginData.name}  onChange={ handleInputChange }/>
             <br />
             <input type="Email" placeholder='Email' name='email' value={loginData.email}  onChange={ handleInputChange }/>
             <br />
             <input type="Password" placeholder='Password' name='pass' value={loginData.pass}  onChange={ handleInputChange }/>
             <br />
             <br />
             <button className='btn btn-primary'>Submit</button>
        </form>
       </div>
    </>
  )
}

export default Login
