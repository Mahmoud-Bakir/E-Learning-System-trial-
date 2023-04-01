import Nav from "../NavBar/nav"
import Partition from "../Partition/partition"
import "./signup.css"
const SignupForm=()=>{
    return(<>
        <Nav/>
        <div className="form_container">
            <h1>Sign Up</h1>
            <Partition lname={"First Name"} itype={"text"}/>
            <Partition lname={"Last Name"} itype={"text"}/>
            <Partition lname={"Email"} itype={"email"}/>
            <Partition lname={"password"} itype={"password"}/>
            
        </div>
        </>
    )
}
export default SignupForm