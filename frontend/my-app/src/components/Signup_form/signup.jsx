import Partition from "../Partition/partition"
import "./signup.css"
const SignupForm=()=>{
    return(
        <div className="form_container">
            <Partition lname={"Email"} itype={"email"}/>
            <Partition lname={"Email"} itype={"email"}/>
        </div>
    )
}
export default SignupForm