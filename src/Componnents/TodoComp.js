import { useState } from "react";
import './TodoComp.css'

const TodoComp = () =>
{

    const [task, setTask] = useState("");
    const [tasklist, setTaskList] = useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    };

    const AddTask = () => {
       if(task !== ''){
           const taskDetails = {
               id : Math.floor(Math.random()*1000),
               value : task,
               isCompleted : false,
           }
           setTaskList([...tasklist,taskDetails])
           setTask("");
       }
    }
   
    const deleteList = (e,id) => {
        e.preventDefault();
        setTaskList(tasklist.filter(t => t.id != id));
    };

    const markCompleted = (e,id) => {
        e.preventDefault();

        // find the index
        const element = tasklist.findIndex(elem => elem.id == id);

        // copy array into new varibale
        const newTaskList = [...tasklist];

        //edit our element
        newTaskList[element] = {
        ...newTaskList[element],
        isCompleted : true,
        }
        setTaskList(newTaskList);
    }

    
     
    return (
        <div className="todo"> 
            <input type="text" value={task} name="text" id="text" onChange={(e) => handleChange(e)}  placeholder="Enter Your Task..."/>
            <button className="add-btn" value="ADD" onClick={ AddTask}>ADD</button><br></br>
            {tasklist !==[] ? 
            <ul>
                {tasklist.map(t =>
                    <li className={t.isCompleted ? "crossText" : "listitem"}>
                        {t.value}
                    <button className="delete" onClick={e => deleteList(e, t.id)}>Delete</button>
                    <button className="completed" onClick ={e => markCompleted(e, t.id)}>Completed</button>
                    </li>)}
            </ul>
             : null}
       </div>     
    )
}


export default TodoComp;