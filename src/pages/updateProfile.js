import React from 'react';
import Header from '../comp/header'
import Footer from '../comp/footer'
import 'react-phone-input-2/lib/style.css'; 
import PhoneInput from 'react-phone-input-2';
import { useState } from "react";

const userString = localStorage.getItem("connectedUser");
const user = JSON.parse(userString);
console.log(user);
const UpdateProfile = () => {
  const [name,setName]=useState(user.name)
  const [username,setUsername]=useState(user.username)
  const [email,setEmail]=useState(user.email)
  const [password,setPassword]=useState(user.password)
  const [confpassword,setConfPassword]=useState('')
  const [phone,setPhone]=useState(user.phone)
  const [naissance,setNaissance]=useState(user.naissance)
//  const user = {name,username,email,password,phone,naissance}
  return (
    <>
      <Header/>
      <div className="bud2">
      <div className="col-md-3  border-right">
  <div className="d-flex flex-column align-items-center text-center p-3 py-5">
  <span className="myfont-black text-center">Updating Profile</span>
    <img
      className="rounded-circle mt-5"
      width="150px"
      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
    />
    <span className="font-weight-bold">Edogaru</span>
    
    <span> </span>
  </div>
</div>

        <div className="box2">
          <form action="">
            <h2 className="myfont">{user.username}</h2>
            <div className="inputBox2">
              <input type="text" required  value={name} onChange={(e)=>setName(e.target.value)}/>
              <span>Name</span>
              <i></i>
            </div>
            <div className="inputBox2">
              <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <span>userName</span>
              <i></i>
            </div>
            <div className="inputBox2">
              <input type="text" required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              <span>email</span>
              <i></i>
            </div>
            <div className="inputBox2">
              <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              <span>phone number</span>
              <i></i>
            </div>
            <div className="inputBox2">
              <input type="Date" required value={naissance} onChange={(e)=>setNaissance(e.target.value)}/>
              <span>birthdate</span>
              <i></i>
            </div>
            <input className="myfont" type="submit" value="Update" />
          </form>
        </div>
        <span> </span>
        <span> </span>
        <span> </span>
        <div className="box2">
          <form action="">
            <h2 className="myfont">IntereStS</h2>
            
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UpdateProfile;
