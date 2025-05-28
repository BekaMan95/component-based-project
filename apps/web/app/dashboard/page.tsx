"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Badge } from "@workspace/ui/components/badge";
import { Button } from "@workspace/ui/components/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs";
import { useTasks } from "../../hooks/use-tasks";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { Input } from "@workspace/ui/components/input";
import { Label } from "@workspace/ui/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select";

const initialTasks = [
  {
    id: 1,
    title: "Implement authentication",
    description: "Set up user authentication using NextAuth.js",
    status: "in-progress" as const,
    priority: "high" as const,
    dueDate: "2024-03-20",
  },
  {
    id: 2,
    title: "Design system setup",
    description: "Configure shadcn/ui components and theme",
    status: "completed" as const,
    priority: "medium" as const,
    dueDate: "2024-03-15",
  },
  {
    id: 3,
    title: "API integration",
    description: "Integrate with backend services",
    status: "todo" as const,
    priority: "high" as const,
    dueDate: "2024-03-25",
  },
];

const statusColors = {
  todo: "bg-yellow-100 text-yellow-800",
  "in-progress": "bg-blue-100 text-blue-800",
  completed: "bg-green-100 text-green-800",
};

const priorityColors = {
  low: "bg-gray-100 text-gray-800",
  medium: "bg-orange-100 text-orange-800",
  high: "bg-red-100 text-red-800",
};

export default function DashboardPage() {
  const { tasks, addTask, deleteTask } = useTasks(initialTasks);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newTask, setNewTask] = useState<Omit<Task, "id">>({
    title: "",
    description: "",
    status: "todo",
    priority: "medium",
    dueDate: "",
  });

  const handleAddTask = () => {
    if (newTask.title && newTask.dueDate) {
      addTask(newTask);
      setNewTask({
        title: "",
        description: "",
        status: "todo",
        priority: "medium",
        dueDate: "",
      });
      setIsDialogOpen(false);
    }
  };

  const renderTaskCard = (task: Task) => (
    <Card key={task.id} className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{task.title}</CardTitle>
          <div className="flex gap-2">
            <Badge className={statusColors[task.status]}>{task.status}</Badge>
            <Badge className={priorityColors[task.priority]}>
              {task.priority}
            </Badge>
          </div>
        </div>
        <CardDescription>{task.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
        <Button
          variant="destructive"
          size="sm"
          onClick={() => deleteTask(task.id)}
        >
          Delete
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Task Management Dashboard</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Add New Task</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Task</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input
                  id="title"
                  value={newTask.title}
                  onChange={(e) =>
                    setNewTask({ ...newTask, title: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input
                  id="description"
                  value={newTask.description}
                  onChange={(e) =>
                    setNewTask({ ...newTask, description: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="status" className="text-right">
                  Status
                </Label>
                <Select
                  value={newTask.status}
                  onValueChange={(value) =>
                    setNewTask({ ...newTask, status: value as Task["status"] })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="todo">To Do</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="priority" className="text-right">
                  Priority
                </Label>
                <Select
                  value={newTask.priority}
                  onValueChange={(value) =>
                    setNewTask({
                      ...newTask,
                      priority: value as Task["priority"],
                    })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select priority" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="dueDate" className="text-right">
                  Due Date
                </Label>
                <Input
                  id="dueDate"
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) =>
                    setNewTask({ ...newTask, dueDate: e.target.value })
                  }
                  className="col-span-3"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" onClick={handleAddTask}>
                Add Task
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="all" className="space-y-4">
        <TabsList>
          <TabsTrigger value="all">All Tasks</TabsTrigger>
          <TabsTrigger value="todo">To Do</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {tasks.map(renderTaskCard)}
        </TabsContent>

        <TabsContent value="todo" className="space-y-4">
          {tasks.filter((task) => task.status === "todo").map(renderTaskCard)}
        </TabsContent>

        <TabsContent value="in-progress" className="space-y-4">
          {tasks
            .filter((task) => task.status === "in-progress")
            .map(renderTaskCard)}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {tasks
            .filter((task) => task.status === "completed")
            .map(renderTaskCard)}
        </TabsContent>
      </Tabs>
    </div>
  );
}
