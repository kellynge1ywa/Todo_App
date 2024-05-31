
import { useState } from "react";

interface Task{
    name:string;
    startTime:string;
    duration:number;
}

function Tasks()
{
    const [tasks, setTasks]=useState<Task[]>([]);
    const [name, setName]=useState("");
    const [startTime, setStartTime]=useState("");
    const [duration, setDuration]=useState(0)

    const addTask=()=>{
        if(name.trim() !=="" && startTime !=="" && duration > 0){
            const newTask:Task={name:name,duration:duration,startTime:startTime};
            setTasks(t=> [...t,newTask]);
            setName("");
            setStartTime("")
            setDuration(0)

        } else{
            alert("Please fill all the fields!!")
        }

    }

    const moveUp=(index:number)=>{
        if(index > 0){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index -1]]=
            [updatedTasks[index -1],updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    const moveDown=(index:number)=>{
        if(index < tasks.length - 1){
            const updatedTasks=[...tasks];
            [updatedTasks[index],updatedTasks[index +1]]=
            [updatedTasks[index +1],updatedTasks[index]]

            setTasks(updatedTasks);
        }
    }

    const removeTask=(index:number)=>{
        const updatedTask=tasks.filter((_,i)=> i !== index);
        setTasks(updatedTask);
    }

    const handleNameChange=(event:any)=>{
        setName(event.target.value);
    }

    const handleTimeChange=(event:any)=>{
        setStartTime(event.target.value);
    }

    const handleDurationChange=(event:any)=>{
        setDuration(event.target.value);
    }

    
    return (
        <div>
            <div>
                <h2>Tasks</h2>
                <div>
                    <input type="text" value={name} placeholder="Enter task..." onChange={handleNameChange} /> <br />
                    <input type="datetime-local" value={startTime}  onChange={handleTimeChange} /> <br />
                    <input type="number" value={duration}
                     placeholder="Enter task..." onChange={handleDurationChange}/>
                    <button onClick={addTask}>Add task</button>
                </div>
                <div>
                    <ul>
                        {tasks.map((task,index)=> 
                        <li key={index}>
                            <span> <strong>Task</strong>: {task.name}, 
                         <strong>Start time</strong>:{task.startTime} 
                         <strong>Duration</strong>:{task.duration} minutes</span>
                         <button onClick={()=>removeTask(index)}>Delete</button>
                         <button onClick={()=> moveUp(index)}>Move up</button>
                         <button onClick={()=> moveDown(index)}>Move down</button>
                        </li> )} 
                         
                    </ul>
                </div>
            </div>
        </div>
    );

}
export default Tasks;