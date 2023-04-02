import Nav from "../NavBar/nav"
import Partition from "../Partition/partition"
import "./signin.css"
import Button from "../Button/button"
import { useState } from "react"
import axios from "axios"

const SigninForm=()=>{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  
   const handleEmail=(e)=>{
    setEmail(e.target.value)
   }
  const handlePassword=(e)=>{
    setPassword(e.target.value)
   }
   const validateEmail=(email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
   }
   const validatePassword=(password)=> {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);}
      
  
  const handleSubmit=()=>{
    if (validateEmail(email)){
        if(validatePassword(password)){
        const data = new FormData()
        data.append("email",email)
        data.append("password",password )
        axios.post("http://127.0.0.1:8000/api/v0.0.1/auth/login",data)
        .then((res) => {
        localStorage.setItem('token',res.data.authorisation.token);
        localStorage.setItem('email',res.data.user.email);
        window.location.href="http://localhost:3000/code_editor"  
        }).catch((err) => {
        console.log(err);
        })
       }else(setPassword("Invalid credentials"))
     }else(setPassword("Invalid credentials"))
  }


    return(<>
        <Nav/>
        <div className="form_container">
            <h1>Sign In</h1>
            <Partition lname={"Email"} itype={"email"}onChange={handleEmail}/>
            <Partition lname={"password"} itype={"password"}onChange={handlePassword}/>
            <Button name={"Login"} onSubmit={handleSubmit}/>
            <br />
            <p className="error"></p>
        </div>
        </>
    )
}
export default SigninForm;