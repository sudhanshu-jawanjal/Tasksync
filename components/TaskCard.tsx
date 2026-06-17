type TaskCardProps = {
  title: string;
  priority: string;
  dueDate: string;
};

export default function TaskCard({ title, priority, dueDate }: TaskCardProps) {
    let priorityClass = "";

    if (priority === "High") {
    priorityClass = "bg-red-200";
    } else if (priority === "Medium") {
    priorityClass = "bg-yellow-200";
    } else {
    priorityClass = "bg-green-200";
    }
  return (
    
    <div className={` flex gap-4 px-6 py-4 rounded-2xl text-black font-medium ${priorityClass}`}>

      <h1>{title}</h1>
      <p>Priority: {priority}</p>
      <p>Due Date: {dueDate}</p>
    </div>
  );
}