import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { Firebase } from "../../firebase/config";
import { Auth } from "../../firebase/config";
import { getFirestore, collection, getDocs ,addDoc,updateDoc,deleteDoc,doc,setDoc} from 'firebase/firestore/lite'; 
import { useNavigate } from 'react-router-dom';



export default function Signup() {
  const navigate=useNavigate()
  const [userName,setuserName]= useState('')
  const [email,setemail]= useState('')
  const [Password,setPassword]= useState('')
  const [PhoneNumber,setPhoneNumber]= useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(Auth, email, Password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User registered:', user)
    console.log('User :', user.uid);

    const db = getFirestore(Firebase);
    const prodtAdd = addDoc(collection(db, "users"), { 
              id:user.uid,
              name: userName ,
              phone:PhoneNumber
            }).then(()=>{
              navigate('/login')
              
            })
            console.log("Document written with ID: ", prodtAdd.id); 
     
            return prodtAdd; 
    


  })
  .catch((error) => {
    console.error('Registration error:', error);
  });



    console.log(userName)
  }




  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt='failed to load'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
            value={userName}
            onChange={(e)=>setuserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e)=>setemail(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            defaultValue="Doe"
            value={PhoneNumber}
            onChange={(e)=>setPhoneNumber(e.target.value)}

          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={Password}
            onChange={(e)=>setPassword(e.target.value)}

          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
