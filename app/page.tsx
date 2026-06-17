"use client";

import { useState } from "react";
import BoardColumn from "@/components/BoardColumn";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import TaskCard from "@/components/TaskCard";

export default function HomePage() {
  const columns = [
  "Todo",
  "In Progress",
  "Done"
];
type Task = {
  title: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  status: "Todo" | "In Progress" | "Done";

};
const [tasks, setTasks] = useState<Task[]>([
   {
    title: "Learn React",
    priority: "High",
    dueDate: "2026-06-16",
    status: "Todo",
  },
  {
    title: "Learn Prisma",
    priority: "Medium",
    dueDate: "2026-06-18",
    status: "In Progress",
  },
  {
    title: "Build Portfolio",
    priority: "Low",
    dueDate: "2026-06-20",
    status: "Done",
  },
]);

function addTask() {
  const newtask: Task = {
    title: `Task ${tasks.length + 1}`,
    priority: "High",
    dueDate: "2026-06-25",
    status: "Todo",
};
  setTasks([...tasks, newtask]);
}
  return (
    <>
      <div className="flex  justify-center mt-4  ">
        <Navbar />
      </div>

      <div className="flex  m-6 justify-evenly  items-start gap-6">
      

          <Sidebar />
    
        <div className="p-4 flex flex-col gap-6 items-center   rounded-2xl text-center ">
          <button onClick={addTask} className="flex gap-6  rounded-2xl text-center bg-[#8AB4F8] py-2 text-black font-semibold px-6 ">Add tasks</button>
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
                            key={task.title}
                            title={task.title}
                            priority={task.priority}
                            dueDate={task.dueDate}
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