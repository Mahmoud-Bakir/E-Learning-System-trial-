import "./button.css"
const Button = ({name})=>{
    return(
    <input className="btn" type="submit" value={name} />
    )
} 
export default Button;