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
const tasks: Task[] = [
  {
    title: "Learn React",
    priority: "High",
    dueDate: "2026-06-16",
    status: "Todo",
  },
  {
    title: "Learn TypeScript",
    priority: "Medium",
    dueDate: "2026-06-17",
    status: "Todo",
  },
  {
    title: "Build Navbar",
    priority: "Low",
    dueDate: "2026-06-18",
    status: "Todo",
  },
  {
    title: "Learn Prisma",
    priority: "High",
    dueDate: "2026-06-19",
    status: "In Progress",
  },
  {
    title: "Setup Database",
    priority: "Medium",
    dueDate: "2026-06-20",
    status: "In Progress",
  },
  {
    title: "Build Portfolio",
    priority: "Low",
    dueDate: "2026-06-21",
    status: "Done",
  },
];
  return (
    <>
      <div className="flex  justify-center mt-4  ">
        <Navbar />
      </div>

      <div className="flex  m-6 justify-evenly  items-start gap-6">
      

          <Sidebar />
    
        <div className="p-4 flex gap-6  rounded-2xl text-center ">

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
      
    </>
  );
}