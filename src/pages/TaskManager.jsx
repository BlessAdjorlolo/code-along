import React, {useState, useEffect} from "react";
import { v4 as uuid } from "uuid";
import TaskItem from "../components/TaskItem";
import { useTaskContext } from "../context/taskContext";


function TaskManager() {
     const{tasks, setValue} = useTaskContext();
     const[input, setInput] = useState("");
     
     const handleSubmit = e => {
        e.preventDefault();
        if (input === "") return;


        const newTasks ={
            id: uuid(),
            text: input,
            completed: false,
        };

        setValue([newTasks, ...tasks]); 
        setInput("");
     };



     const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setValue(newTasks);
     };
     
     const handleCompleted = (id) => {
       const newTasks = tasks.map((task) => {
        if (task.id ===id) {
             return{
                ...task,
                completed: !task.completed
             }
        }
        return task;
       });
        setValue(newTasks)
     };

     const handleEdit = (id) => {
        const newTasks = tasks.filter((task) => {
            if (task.id === id) {
                setInput(task.text);
                return false;
            } 
                return task;
        });
        setValue(newTasks);
     };

     useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    

    return(
        // <div className="relative h-screen w-full bg-slate-800/950">
        // // <img src= {background} alt="" />
        // </div>
        
        <div className="h-screen bg-blue-600 flex justify-center items-center">
            <div className="max-w-2xl max-h-96 bg-white rounded-xl px-5 py-10">
                <form onSubmit = {handleSubmit} className="space-x-5 flex w-[30rem] mb-10">
                    <input type="text" className="border-2 borger-gray-600 p-2 rounded-md outline-none w-10/12"
                    onChange={(e) => setInput(e.target.value)}
                    value={input} />
                    <button type="submit" className="bg-blue-600 text-white text-lg py-2 px-5 rounded md"
                    disabled={input=== ""}
                    >Add</button>
                </form>
                <div className="space-y-2 overflow-y-auto h-52">
                    {
                           (tasks.map((task) => 
                            <TaskItem 
                            key={task.id} 
                            task={task} 
                            handleDelete={handleDelete}
                            handleCompleted={handleCompleted}
                            handleEdit={handleEdit}
                             />
                             ))
                    }
                    {
                    //  <TaskItem task={"task"} />
                    }
                </div>
                </div>
            </div>
        
    )
}

export default TaskManager; 