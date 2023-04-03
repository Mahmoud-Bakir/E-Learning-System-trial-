import "./button.css"
const Button = ({name,onSubmit})=>{
    return(
    <input className="btn" type="submit" value={name} onClick={onSubmit}/>
    )
} 
export default Button;