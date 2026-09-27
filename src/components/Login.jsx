import React from 'react'
import { useState } from 'react';

function Login() {
  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");  
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(
      email ===""||
      pass ===""      
    ){
      setColor("red")
      setMsg("All fields are mandatory")
      return}
    if(pass.length < 6){
      setColor("red")
      setMsg("Password must be at least 6 characters")
      return}else{
      setColor("green");
      setMsg("User registered correctly");
      return} 
  }

  return (
    <div className='regisBox'>
      <h1>Login</h1>  

      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input 
          type='email'
          placeholder='Enter your email'
          name='Email'
          value={email}
          onChange = {(e)=>{setEmail (e.target.value)}}
        />
        <p>Password</p>
        <input 
          type='password'
          placeholder='Enter your password'
          name='password'
          value={pass}
          onChange={(e)=>{setPass (e.target.value)}} 
        />          
        <button type='submit' className='regisBtn'>Register</button>
        {msg && <p style={{color}} >{msg}</p>}
      </form>
    </div>
  )
}

export default Login;
