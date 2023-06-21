const localStorageKey = "tasks";
export const saveTasksInLocalStorage = (tasks) => {
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));
};
export const getTasksFromLocalStorage = () => {
    const storedTasks = localStorage.getItem(localStorageKey);
    return storedTasks ? JSON.parse(storedTasks) : [];
};
