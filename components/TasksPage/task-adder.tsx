"use client";
import { Plus } from "lucide-react";
import { useState } from "react";

interface TaskAdderProps extends React.HTMLAttributes<HTMLDivElement> {
  onAddTask: (desc: string) => void;
}

export default function TaskAdder({ className, onAddTask }: TaskAdderProps) {
  const [taskDesc, setTaskDesc] = useState("");

  function handleClick() {
    if (taskDesc.trim() === "") {
      return;
    }
    onAddTask(taskDesc);
    setTaskDesc("");
  }

  return (
    <section className={`${className}`}>
      <div className="flex bg-violet-950 rounded-lg p-4 gap-4">
        <button onClick={handleClick}>
          <Plus></Plus>
        </button>
        <input
          type="text"
          placeholder="Task to Add"
          value={taskDesc}
          className="bg-transparent"
          onChange={(e) => setTaskDesc(e.target.value)}
        />
      </div>
    </section>
  );
}
