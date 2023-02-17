import React,{useContext, useState} from 'react';

import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../store/Context';
import './Signup.css';
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const history = useHistory()

  const [Username,setUsername] = useState('')
  const [email,setEmail] =useState('')
  const [phone,setPhone] = useState()
  const [password,setPassword] = useState('')

  const {Firebase} =useContext(FirebaseContext)

  const submitHandler = (e)=>{
    e.preventDefault()
    Firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      console.log(Username,"???????????????????????????????????????????????????????????????????????????????????????????????",result)
      result.user.updateProfile({displayName:Username}).then(()=>{
        Firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:Username,
          phone:phone
        }).then(()=>{
          history.push('/login')
        })
      })
    })
  };

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={submitHandler}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            value={Username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            id="fname"
            name="name"
            defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          history.push('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
