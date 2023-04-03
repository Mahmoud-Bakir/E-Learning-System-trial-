import Nav from "../NavBar/nav"
import Partition from "../Partition/partition"
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
        const data = {
          email:email,
          password:password
        }
        const jsonData =JSON.stringify(data)
        axios.post('http://localhost:3000/auth/login',jsonData,
        {
          
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        console.log(res)
        localStorage.setItem("token",res.token)
        }).catch((err) => {
          console.log(jsonData)
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