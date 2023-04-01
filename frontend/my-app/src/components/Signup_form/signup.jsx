import Nav from "../NavBar/nav"
import Partition from "../Partition/partition"
import "./signup.css"
import Button from "../Button/button"

const SignupForm=()=>{
    return(<>
        <Nav/>
        <div className="form_container">
            <h1>Kindly Fill The Form</h1>
            <Partition lname={"First Name"} itype={"text"}/>
            <Partition lname={"Last Name"} itype={"text"}/>
            <Partition lname={"Email"} itype={"email"}/>
            <Partition lname={"password"} itype={"password"}/>
            <Button name={"Sign-Up"}/>
            <p>already have an account?</p>
           
        </div>
        </>
    )
}
export default SignupForm