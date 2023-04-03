import Nav from "../NavBar/nav"
import Partition from "../Partition/partition"
import "./signup.css"
import Button from "../Button/button"
import { useState } from "react"
import axios from "axios"

const SignupForm=()=>{
        const [first,setFirst]=useState("")
        const [last,setLast]=useState("")
        const [email,setEmail]=useState("")
        const [password,setPassword]=useState("")
        const [error,setError]=useState("")
     
        const validateEmail=(email) =>{
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return emailRegex.test(email);
         }
        
        const validatePassword=(password)=> {
          const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
          return passwordRegex.test(password);
         }
     
        const handleFirst=(e)=>{
          setFirst(e.target.value)
         } 
         const handleLast=(e)=>{
          setLast(e.target.value)
         }
         const handleEmail=(e)=>{
          setEmail(e.target.value)
         }
         const handlePassword=(e)=>{
          setPassword(e.target.value)
         }
         
  
     
         const handleSubmit=()=>{
          if (first==="" || last==="" || email==="" || password===""){
              setError("All input are required")
              console.log()
             }else{
               if (validateEmail(email)){
                 if(validatePassword(password)){  
                    const data = {
                     first_name: first,
                     last_name: last,
                     email: email,
                     password:password
                   };
                   const jsonData = JSON.stringify(data);
                   axios.post('http://localhost:3000/auth/register',jsonData,
                    {
                      
                    headers: {
                      'Content-Type': 'application/json'
                    }
                  })
                  .then((res) => {
                    console.log(res)
                    }).catch((err) => {
                       console.log(err);
                    })
                    

                  }else(setError("Invalid password"))
             }else(setError("Invalid email"))
                  }
          }
    return(<>
        <Nav/>
        <div className="form_container">
            <h1>Kindly Fill The Form</h1>
            <Partition lname={"First Name"} itype={"text"} onChange={handleFirst}/>
            <Partition lname={"Last Name"} itype={"text"} onChange={handleLast}/>
            <Partition lname={"Email"} itype={"email"}onChange={handleEmail}/>
            <Partition lname={"password"} itype={"password"}onChange={handlePassword}/>
            <Button name={"Sign-Up"}onSubmit={handleSubmit}/>
            <br />
            <p className="error" >{error}</p>
           <p className="text" >already have an account?</p> 
        </div>
        </>
    )
}
export default SignupForm