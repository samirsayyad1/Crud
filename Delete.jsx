import axios from 'axios';
import React, { useEffect } from 'react'

import { useNavigate, useParams } from 'react-router-dom';


export default function Delete() {
  const navigate = useNavigate();
  const params = useParams();

   const deldata =()=>{
 
      axios.delete(`http://localhost:3000/user1/${params.id}`)

     .then(Response=>{
       navigate('/App1'); 
    })
    .catch(err=>{
       alert('err');
    })
}

    useEffect(()=>{
      deldata();
    })
}
