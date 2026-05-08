"use client";
import { useState } from "react";
import Task from "@/components/TasksPage/task";
import TaskAdder from "./task-adder";
interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {}

type Task = {
  id: string;
  desc: string;
};

export default function TaskList({ className }: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const handleAddTask = (desc: string) => {
    const newTask = {
      id: crypto.randomUUID(),
      desc: desc,
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <section className={`${className}`}>
      <p className="uppercase mb-4">Tasks</p>
      <ul className="flex flex-col gap-4 mb-4">
        {tasks.map((task) => (
          <li key={task.id}>
            <Task desc={task.desc} />
          </li>
        ))}
      </ul>
      <TaskAdder onAddTask={handleAddTask}></TaskAdder>
    </section>
  );
}
