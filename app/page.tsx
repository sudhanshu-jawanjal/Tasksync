"use client";

import { useState, useEffect } from "react";
import BoardColumn from "@/components/BoardColumn";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TaskCard from "@/components/TaskCard";

type Task = {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  status: "Todo" | "In Progress" | "Done";

};

export default function HomePage() {
 const columns: Task["status"][] = [
  "Todo",
  "In Progress",
  "Done"
];

const [tasks, setTasks] = useState<Task[]>([
   {
    id: 1,
    title: "Learn React",
    priority: "High",
    dueDate: "2026-06-16",
    status: "Todo",
  },
  {
    id: 2,
    title: "Learn Prisma",
    priority: "Medium",
    dueDate: "2026-06-18",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Build Portfolio",
    priority: "Low",
    dueDate: "2026-06-20",
    status: "Done",
  },
]);



useEffect(()=>{
  const saved = localStorage.getItem("tasks");

  console.log("Saved data:", saved);
  if(saved){
    const parsedTasks: Task[] = JSON.parse(saved);
        setTasks(parsedTasks);
  }
},[]);
useEffect(()=>{

   console.log("Saving tasks", tasks);
  localStorage.setItem(
    "tasks",
    JSON.stringify(tasks));
},[tasks]);


function addTask() {

  if (!title.trim()) return;
  const newtask:Task={

id: Date.now(),

title,

priority,

status,

dueDate

};
setTasks([...tasks, newtask]);
setTitle("");

setPriority("High");

setStatus("Todo");

setDueDate("2026-06-19");
}

function deleteTask(id:number) {

setTasks(

tasks.filter(

task=>task.id!==id

)

)

}

const [title, setTitle] = useState("");

const [priority, setPriority] = useState<"High"|"Medium"|"Low">("High");

const [status, setStatus] = useState<"Todo"|"In Progress"|"Done">("Todo");

const [dueDate, setDueDate] = useState("2026-06-19");
  return (
    <>
      <div className="flex  justify-center mt-4  ">
        <Navbar />
      </div>

      <div className="flex  m-6 justify-evenly  items-start gap-6">
      

          <Sidebar />
    
        <div className="p-4 flex flex-col gap-6 items-center   rounded-2xl text-center ">
          <div className="flex gap-6  rounded-2xl text-center">
            <input

                type="text"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border rounded-xl px-4 py-2 text-black bg-[#CBCBCB]"
              />
              <select
                  className="border rounded-xl px-4 py-2 text-black bg-[#CBCBCB]"

                  value={priority}

                  onChange={(e)=>

                  setPriority(

                  e.target.value as "High"|"Medium"|"Low"

                  )

                  }

                  >

                  <option>High</option>

                  <option>Medium</option>

                  <option>Low</option>

              </select>
              <select
              className="border rounded-xl px-4 py-2 text-black bg-[#CBCBCB]"

                value={status}

                onChange={(e)=>

                setStatus(

                e.target.value as "Todo"

                |"In Progress"

                |"Done"

                )

                }

                >

                <option>Todo</option>

                <option>In Progress</option>

                <option>Done</option>

                </select>
              <input
                className="border rounded-xl px-4 py-2 text-black bg-[#CBCBCB]"
                type="date"

                value={dueDate}

                onChange={(e)=>setDueDate(e.target.value)}

                />
                
            <button onClick={addTask} className="flex gap-6  rounded-2xl text-center bg-[#6D8196] py-2 text-black font-semibold px-6 ">Add tasks</button>
          </div>
          <div className="flex gap-6  rounded-2xl text-center flex-col">
              {
                columns.map((column) => (
                  <BoardColumn
                    key={column}
                    title={column}
                  >
                    {
                      tasks
                        .filter((task) => task.status === column)
                        .map((task) => (
                          <TaskCard
                            key={task.id}
                            title={task.title}
                            priority={task.priority}
                            dueDate={task.dueDate}
                            onDelete={() => deleteTask(task.id)}
                          />
                        ))  
                    }
                  </BoardColumn>
                ))
              }
          </div>

       
          
        </div>
      </div>
      
    </>
  );
}