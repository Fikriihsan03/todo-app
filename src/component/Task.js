import React from 'react';
import './Task.css'
const Task = ({massage,id,setTask,currentTask}) =>{
    const handleDelete = () =>{
        const deletedTask= currentTask.filter(task=>task.id!==id)
        setTask(deletedTask)
    }
    const [toggledTrue,setToggled] = React.useState(false)
    return (
        <>
        <div className ="row d-flex justify-content-center">
        <i onClick={()=>setToggled(prevtoggle => !prevtoggle)} 
        className={toggledTrue?"fas fa-check-square": "far fa-square"}>
        </i>
            <li className="col-md-9 col-sm-5 ">
                {massage}
            </li>
            <button onClick={()=>handleDelete()}className="col-md-2 col-sm-1 fa fa-trash"></button>
        </div>
        </>
        )
    }
export default Task;
