import React from 'react'
import pic from '../Images/404(2).gif'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
  return (
    <div> 
        
    <img src={pic} alt="" width="100%" height="400px" />
    <br />
    <button className='btn btn-outline-dark' onClick={()=> {navigate('/')}}>Home</button>
    </div>
  )
}

export default NotFound