import  './partition.css';

const Partition = ({lname,itype,onChange})=>{
    return(
    <div className='part'>
        <label > {lname}</label>
        <input type={itype} onChange={onChange}/>
    </div>
    )
} 

export default Partition