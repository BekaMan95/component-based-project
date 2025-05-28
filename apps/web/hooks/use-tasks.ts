// hooks/useTasks.ts
import { useState } from "react";

type TaskStatus = "todo" | "in-progress" | "completed";
type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: string;
}

export const useTasks = (initialTasks: Task[]) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const addTask = (newTask: Omit<Task, "id">) => {
    const id = Math.max(0, ...tasks.map((task) => task.id)) + 1;
    setTasks([...tasks, { ...newTask, id }]);
  };

  const updateTask = (id: number, updatedTask: Partial<Omit<Task, "id">>) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
  };
};
