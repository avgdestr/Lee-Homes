import React from 'react'
import pic from '../Images/404(2).gif'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div> 
        
    <img src={pic} alt="" />
    <br />
    <button className='btn btn-outline-dark' onClick={()=> {navigate('/')}}>Home</button>
    </div>
  )
}

export default NotFound