type BoardColumnProps = {
  title: string;
  children: React.ReactNode;
};

export default function BoardColumn({ title, children }: BoardColumnProps) {
  const getColumnIcon = (title: string) => {
    switch (title) {
      case "Todo":
        return "📝";
      case "In Progress":
        return "⚡";
      case "Done":
        return "✓";
      default:
        return "•";
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 flex flex-col min-h-96">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <span className="text-2xl">{getColumnIcon(title)}</span>
        <h2 className="font-semibold text-foreground">{title}</h2>
        <span className="ml-auto text-xs font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
          {typeof children === "object" && Array.isArray(children)
            ? children.length
            : children
            ? 1
            : 0}
        </span>
      </div>
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
