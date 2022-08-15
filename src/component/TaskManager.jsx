import React, {useState} from "react";
import TaskItem from "./TaskItem";
// import background from "../assets/background.jpg";



function TaskManager() {
     const[tasks, setTasks] = useState([]);
     const[input, setInput] = useState("");
     
     const handleSubmit = e => {
        e.preventDefault();
        if (input === "") return;

        setTasks([input, ...tasks]); 
        setInput("");
     };

     const handleDelete = (idx) => {
        const newTasks = tasks.filter((task) => task !== idx);
        setTasks(newTasks);
     }

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
                            tasks.map((task) => <TaskItem task={task} handleDelete={handleDelete} />)
                    }
                    {
                    //  <TaskItem task={"task"} />
                    }
                </div>
                </div>
            </div>
        
    );
}

export default TaskManager; 