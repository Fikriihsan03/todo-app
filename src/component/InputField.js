import React ,{ useState}from 'react';

const InputField = ({add,total}) => {
    const [currentValue,setValue] = useState('')
    const addTask = () =>{
        const newTask = {
            id:total.length+1,
            massage :currentValue,
        }
        add([...total,newTask])
        setValue('')
    }
    
    return(
        <>
        <div className="row d-flex justify-content-center">
        <input value={currentValue}type="text" onChange ={(event => setValue(event.target.value))} />
        <button disabled={currentValue===''}className ="btn btn-primary fas fa-plus" onClick={()=>addTask()} ></button>
        </div>
        </>
    )
}
export default InputField;