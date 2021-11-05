import React from "react";
import "./style.css";

export default function App() {
  const handleSubmit=(e)=>{
    e.preventDefault();
    const first=e.target.fname.value;
    const last=e.target.lname.value;
    const email=e.target.email.value;
    console.log("firstname : " +first, "/n", "lastname : " +last,"/n","email :" +email );
    
  }
  return (
      <div>
       
         <h1>SUBSCRIBE</h1>
         <p>Sign up with your email address to receive news and updates.</p>
         
         <form onSubmit={handleSubmit}>
        <input type="text" name="fname" placeholder="firstname"/>
        <input type="text" name="lname" placeholder="lastname"/>
        <input type="text" name="email" placeholder="email"/>
        </form>
        <button id="btn">Subscribe</button>
      </div>
  );
}

