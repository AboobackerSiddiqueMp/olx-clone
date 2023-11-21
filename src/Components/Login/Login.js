import React from 'react';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase/config';
import { useNavigate } from 'react-router-dom';

import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(Auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User signed in:', user);

  }).then(()=>{
    navigate('/')
  })
  .catch((error) => {
    console.error('Sign-in error:', error);
    alert(error)
  });





  }

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      </div>
    </div>
  );
}

export default Login;
