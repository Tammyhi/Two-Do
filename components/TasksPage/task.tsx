//interface TaskProps extends React.HTMLAttributes<HTMLDivElement> {}
import { Circle } from "lucide-react";

interface TaskProps {
  desc: string;
}

export default function Task({ desc }: TaskProps) {
  return (
    <div className="flex bg-violet-800 text-indigo-100 rounded-lg p-4 gap-4">
      <button>
        <Circle className="stroke-indigo-200 hover:stroke-emerald-200"></Circle>
      </button>
      <p>{desc}</p>
    </div>
  );
}
