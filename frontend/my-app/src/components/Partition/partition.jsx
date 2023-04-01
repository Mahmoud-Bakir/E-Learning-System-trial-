import  './partition.css';

const Partition = ({lname,itype})=>{
    return(
    <div className='part'>
        <label > {lname}</label>
        <input type={itype} />
    </div>
    )
} 

export default Partition