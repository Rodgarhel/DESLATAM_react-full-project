import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email,setEmail] = useState("");
  const [pass, setPass] = useState("");  
  const [msg, setMsg] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();    

    if( !email.trim() || !pass.trim() ){
      setColor("red")
      setMsg("All fields are mandatory")
      return}
    if(pass.length < 6){
      setColor("red")
      setMsg("Password must be at least 6 characters")
      return;
      }else{
        setColor("green");
        setMsg("User registered correctly");
        setEmail("");
        setPass("");
        navigate("/DESLATAM_react-full-project");
        return;
    }};

  return (
    <div className='credentials'> 
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
          <button type='submit' className='regisBtn'>Login</button>
          {msg && <p style={{color}} >{msg}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login;
