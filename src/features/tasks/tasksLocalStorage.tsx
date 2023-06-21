const localStorageKey = "tasks";

export const saveTasksInLocalStorage = (tasks: any[]): void => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = (): any[] => {
  const storedTasks = localStorage.getItem(localStorageKey);
  return storedTasks ? JSON.parse(storedTasks) : [];
};
