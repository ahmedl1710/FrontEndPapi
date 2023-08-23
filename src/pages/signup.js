import Headerbelog from "../comp/headerbeflog";
import Footer from "../comp/footer";
import { useState } from "react";
import qs from "qs";

const Signup = () => {
  const [name,setName]=useState('')
  const [username,setUsername]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [confpassword,setConfPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [naissance,setNaissance]=useState('')
  const handleClick=(e)=>{
    e.preventDefault()
    const user={name,username,email,password,phone,naissance}
    console.log(user);
    fetch("http://localhost:8083/user/SignUp",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(user)
      
    }).then(()=>{
      console.log("new user added");
    
    }).then((response)=>{
        const userlog = { username, password };
       fetch("http://localhost:8083/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: qs.stringify(userlog),
      }).then((response) => response.json()) // Assuming the server responds with JSON
      .then((data) => {
        if (data.access_token && data.refresh_token) {
          // Assuming the authentication token is in the 'token' field of the response data
          const authToken = data.access_token;
          const refreshToken = data.refresh_token;
          // Store the authToken in localStorage
          localStorage.setItem("authToken", authToken);
          localStorage.setItem("refToken", refreshToken);
          localStorage.setItem("username", username);
          console.log("Logged in");
          window.location.href = "/home";
        } 
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
  });
  }
  return (
    <>
      <Headerbelog />
      <div className="bud">
        <div className="box2">
          <form action="">
            <h2 className="myfont">sign up</h2>
            <div className="inputBox">
              <input type="text" required  value={name} onChange={(e)=>setName(e.target.value)}/>
              <span>Name</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
              <span>userName</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required value={email}  onChange={(e)=>setEmail(e.target.value)}/>
              <span>email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required value={password}  onChange={(e)=>setPassword(e.target.value)}/>
              <span>Password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required value={confpassword}  onChange={(e)=>setConfPassword(e.target.value)}/>
              <span>confirm password</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="text" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              <span>phone number</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="Date" required value={naissance} onChange={(e)=>setNaissance(e.target.value)}/>
              <span>birthdate</span>
              <i></i>
            </div>
            <input className="myfont" type="submit" value="signup" onClick={handleClick}/>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );

  }
export default Signup;
