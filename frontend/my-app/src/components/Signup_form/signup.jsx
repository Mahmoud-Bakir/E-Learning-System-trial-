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
              setPassword("All input are required")
             }else{
               if (validateEmail(email)){
                 if(validatePassword(password)){  
                   const data = new FormData()
                   data.append("first_name",first)
                   data.append("last_name",last)
                   data.append("email",email)
                   data.append("password",password)
                   data.append("user_type_id",2)
                   axios.post("http://127.0.0.1:8000/api/v0.0.1/register",data)
                   .then((res) => {
                      console.log(res)
                      localStorage.setItem('token',res.data.authorisation.token);
                      localStorage.setItem('email',res.data.user.email);
                      window.location.href="http://localhost:3000/code_editor"     
                      }).catch((err) => {
                         console.log(err);
                      })
                  }else(setPassword("Invalid credentials"))
             }else(setPassword("Invalid credentials"))
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
            <Button name={"Sign-Up"}/>
            <br />
            <p className="error"></p>
           <p className="text" >already have an account?</p> 
        </div>
        </>
    )
}
export default SignupForm