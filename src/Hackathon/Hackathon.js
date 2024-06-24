import React, {useState} from 'react'
import './Hackathon.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


export default function Login() { 
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    function loginUser() {
        const newUser={email,password}
    
        navigate("/")
    
    }
  return (
    <div className='login-container'>
        <div className='form-group'>
            <label>Email</label>
            <input
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}/>

        </div>
        <div className='form-group'>
            <label>Password</label>
            <input
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}/>

        </div>
        <button onClick={loginUser}>Login</button>
        
        
      
    </div>
  )
}
