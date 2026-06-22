type TaskCardProps = {
  title: string;
  priority: string;
  dueDate: string;
  onDelete: () => void;
};

export default function TaskCard({ title, priority, dueDate, onDelete }: TaskCardProps) {
    let priorityClass = "";
    let buttonClass = "";

    if (priority === "High") {
    priorityClass = "bg-[#FFA896]";
    buttonClass = "bg-[#6D8196] hover:bg-[#5a6d7d]";
    } else if (priority === "Medium") {
    priorityClass = "bg-[#D4DE95]";
    buttonClass = "bg-[#6D8196] hover:bg-[#5a6d7d]";
    } else {
    priorityClass = "bg-[#CFFFDC]";
    buttonClass = "bg-[#6D8196] hover:bg-[#5a6d7d]";
    }
  return (
    
    <div className={` flex gap-12 px-6 py-4 rounded-2xl  text-black font-medium ${priorityClass}`}>

      <h1>{title}</h1>
      <p>Priority: {priority}</p>
      <p>Due Date: {dueDate}</p>
      <button
        className={` ${buttonClass} text-white px-4 py-2 rounded-lg `}
        onClick={onDelete}
        >

        Delete

        </button>
    </div>
  );
}