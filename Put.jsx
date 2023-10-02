import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';


function Put(id) {
    

    const per = useParams();
    // const navigate = useNavigate();
    const [ name, setName ] = useState();
    const [ email, setEmail ] = useState();
    const [ pass, setPass ] = useState();
    const [ mobile, setMobile ] = useState();


    const dataInfo = async () => {

        let res = await axios.get(`http://localhost:3000/user1/${per.id}`)

        setName(res.data.name)
        setEmail(res.data.email)
        setPass(res.data.pass)
        setMobile(res.data.mobile)


        
        console.log(res);
    }

    useEffect(() => {
        dataInfo()
    }, [])

    const Onsubmits = async (id) => {

        await axios.put(`http://localhost:3000/user1/${id}`, {
            
              name:name,
              email:email,
              pass:pass,
              mobile:mobile,

        })
            .then(response => {
                alert('successfull...');
    
            })
            .catch(err => {
                alert('err');
            })
        console.log('err');

    }

    return (
        <>
            <div className='forms1'>
                <form  className='forms'>
                    <input type="text" placeholder='User Name' defaultValue={ name } onChange={ (e) => setName(e.target.value) } />
                    <br />
                    <input type="Email" placeholder='Email' defaultValue={ email } onChange={ (e) => setEmail(e.target.value) } />
                    <br />
                    <input type="password" placeholder='Password' defaultValue={ pass } onChange={ (e) => setPass(e.target.value) } />
                    <br />
                    <input type="Mobile" placeholder='Mobile' defaultValue={ mobile } onChange={ (e) => setMobile(e.target.value) } />
                    <br />
                  
                    <br />
                    {/* <button className='btn btn-primary'>Submit</button> */}
                    <button className='btn btn-outline-primary mt-4' onClick={ (e) => Onsubmits(per.id) }>Save</button>

                </form>
            </div>
        </>
    )
}

export default Put;
