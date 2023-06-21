import { useEffect, useState } from "react";


interface Task {
  id: any;
  content: string;
  done: boolean;
}

const getInitialTasks = (): Task[] => {
  const tasksFromLocalStorage = localStorage.getItem("tasks");

  return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
};

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(getInitialTasks);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const removeTask = (id:any) => {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  };

  const toggleTaskDone = (id:any) => {
    setTasks((tasks) =>
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, done: !task.done };
        }
        return task;
      })
    );
  };

  const setAllDone = () => {
    setTasks((tasks) =>
      tasks.map((task) => ({
        ...task,
        done: true,
      }))
    );
  };

  const addNewTask = (content:string) => {
    setTasks((tasks) => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask,
  };
};
