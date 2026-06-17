type BoardColumnProps = {
  title: string;
  children: React.ReactNode;
};

export default function BoardColumn({
  title,
  children,
}: BoardColumnProps) {
  return (
    <div className="border flex flex-col gap-2 rounded-xl p-4">
      <h2 className="font-bold text-lg mb-4">
        {title}
      </h2>

      {children}
    </div>
  );
}