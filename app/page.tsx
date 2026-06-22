"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import BoardColumn from "@/components/BoardColumn";
import TaskCard from "@/components/TaskCard";

type Task = {
  id: number;
  title: string;
  priority: "High" | "Medium" | "Low";
  dueDate: string;
  status: "Todo" | "In Progress" | "Done";
};

export default function HomePage() {
  const columns: Task["status"][] = ["Todo", "In Progress", "Done"];
  
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

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("High");
  const [status, setStatus] = useState<"Todo" | "In Progress" | "Done">("Todo");
  const [dueDate, setDueDate] = useState("2026-06-19");

  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      const parsedTasks: Task[] = JSON.parse(saved);
      setTasks(parsedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (!title.trim()) return;
    const newtask: Task = { id: Date.now(), title, priority, status, dueDate };
    setTasks([...tasks, newtask]);
    setTitle("");
    setPriority("High");
    setStatus("Todo");
    setDueDate("2026-06-19");
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          <div className="p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-6">My Tasks</h1>
              
              {/* Task Input Section */}
              <div className="bg-card border border-border rounded-xl p-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <input
                    type="text"
                    placeholder="Task title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="col-span-1 md:col-span-2 px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                  />
                  <select
                    className="px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={priority}
                    onChange={(e) =>
                      setPriority(e.target.value as "High" | "Medium" | "Low")
                    }
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                  <select
                    className="px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    value={status}
                    onChange={(e) =>
                      setStatus(
                        e.target.value as "Todo" | "In Progress" | "Done"
                      )
                    }
                  >
                    <option>Todo</option>
                    <option>In Progress</option>
                    <option>Done</option>
                  </select>
                  <input
                    className="px-4 py-3 rounded-lg bg-input border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <button
                    onClick={addTask}
                    className="md:col-span-1 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-all"
                  >
                    Add Task
                  </button>
                </div>
              </div>

              {/* Board Section */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {columns.map((column) => (
                  <BoardColumn key={column} title={column}>
                    {tasks
                      .filter((task) => task.status === column)
                      .map((task) => (
                        <TaskCard
                          key={task.id}
                          title={task.title}
                          priority={task.priority}
                          dueDate={task.dueDate}
                          onDelete={() => deleteTask(task.id)}
                        />
                      ))}
                  </BoardColumn>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
