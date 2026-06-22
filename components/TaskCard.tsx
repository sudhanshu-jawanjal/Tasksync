type TaskCardProps = {
  title: string;
  priority: string;
  dueDate: string;
  onDelete: () => void;
};

export default function TaskCard({
  title,
  priority,
  dueDate,
  onDelete,
}: TaskCardProps) {
  let priorityBgClass = "";
  let priorityTextClass = "";
  let priorityLabel = "";

  if (priority === "High") {
    priorityBgClass = "bg-red-500/20";
    priorityTextClass = "text-red-400";
    priorityLabel = "🔴 High";
  } else if (priority === "Medium") {
    priorityBgClass = "bg-orange-500/20";
    priorityTextClass = "text-orange-400";
    priorityLabel = "🟠 Medium";
  } else {
    priorityBgClass = "bg-green-500/20";
    priorityTextClass = "text-green-400";
    priorityLabel = "🟢 Low";
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="bg-secondary border border-border rounded-lg p-4 hover:border-primary transition-all group">
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-medium text-foreground text-sm leading-snug flex-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <button
          onClick={onDelete}
          className="opacity-0 group-hover:opacity-100 flex-shrink-0 text-destructive hover:bg-destructive/20 p-1 rounded transition-all"
          title="Delete task"
        >
          ✕
        </button>
      </div>

      <div className="flex items-center justify-between gap-2">
        <div
          className={`text-xs font-semibold px-2.5 py-1 rounded ${priorityBgClass} ${priorityTextClass}`}
        >
          {priorityLabel}
        </div>
        <span className="text-xs text-muted-foreground">
          {formatDate(dueDate)}
        </span>
      </div>
    </div>
  );
}
