import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const Home = () => {
         const navigate= useNavigate();
    const[mess,setmess]=useState({
        name:"",
        email:"",
        message:""
    })
    const handlechange= e=>{
        const {name,value}=e.target
        setmess({
            ...mess,[name]:value
        })
    }
    const send=()=>{
        const {name,email,message}=mess
        axios.post("http://localhost:9002/sendm",mess)
        .then(res=>console.log(res))
        alert("Thank you for your response");
        navigate("/home")

        

        }
    

  return (
     <div className="container">
        <h1>Contact Us</h1>
        <form className="contact-form" >
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" value={mess.name} onChange={handlechange} required/>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" value={mess.email} onChange={handlechange} required/>
            <label for="message">Message:</label>
            <textarea id="message" name="message" value={mess.message} onChange={handlechange} required></textarea>
            <input type="submit" onClick={send}/>
        </form>
    </div>
  );
}

export default Home;