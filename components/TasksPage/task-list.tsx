"use client";
import { createClient } from "@/lib/supabase/client";
import { useState } from "react";
import Task from "@/components/TasksPage/task";
import TaskAdder from "@/components/TasksPage/task-adder";
interface TaskListProps extends React.HTMLAttributes<HTMLDivElement> {
  storedTasks: Task[];
  owner: string;
}

type Task = {
  id: string;
  desc: string;
  is_completed: boolean;
  order_index?: number;
  user_id?: string;
};

export default function TaskList({
  className,
  storedTasks,
  owner,
}: TaskListProps) {
  const [tasks, setTasks] = useState<Task[]>(storedTasks);
  const supabase = createClient();

  const handleAddTask = async (desc: string) => {
    const newTask = {
      desc: desc,
      is_completed: false,
      order_index: 0,
      user_id: 'TAMMY'
    };

    const { data: newDBTask, error } = await supabase.from("Daily_Tasks").insert(newTask).select().single();
    if (!error && newDBTask) {
      setTasks([...tasks, newDBTask]);
    }
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
