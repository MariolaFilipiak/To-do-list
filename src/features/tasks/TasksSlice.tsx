import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

interface Task {
  id: string;
  content: string;
  done: boolean;
}

interface TasksState {
  tasks: Task[];
  hideDone: boolean;
  loading: boolean;
}
const initialState: TasksState = {
  tasks: getTasksFromLocalStorage(),
  hideDone: false,
  loading: false,
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    addTask: ({ tasks },action: PayloadAction<Task>) => {
      tasks.push(action.payload);
    },

    toggleHideDone: (state) => {
      state.hideDone = !state.hideDone;
    },

    toggleTaskDone: ({ tasks },action: PayloadAction<string>) => {
      const task = tasks.find((t) => t.id === action.payload);
      if (task) {
        task.done = !task.done;
      }
    },

    removeTask: ({ tasks },action: PayloadAction<string>) => {
      const index = tasks.findIndex(( t ) => t.id === action.payload);
      if (index !== -1) {
        tasks.splice(index, 1);
      }
    },

    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    exampleTasks: (state) => {
      state.loading = true;
    },
    exampleTasksSuccess: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      state.loading = false;
    },
    exampleTasksError: (state) => {
      state.loading = false;
    },
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload;
      state.loading = false;
    },
  },
});

export const {
  addTask,
  toggleHideDone,
  toggleTaskDone,
  removeTask,
  setAllDone,
  exampleTasks,
  exampleTasksSuccess,
  exampleTasksError,
  setTasks,
} = taskSlice.actions;

const selectTasksState = (state:any) => state.tasks;

export const selectTasks = (state:any) => selectTasksState(state).tasks;
export const selectHideDone = (state:any) => selectTasksState(state).hideDone;
export const selectAreTaskEmpty = (state:any) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state:any) =>
  selectTasks(state).every(({ done }:Task) => done);
export const selectLoading = (state:any) => selectTasksState(state).loading;

export const getTaskById = (state:any, taskId: string) =>
  selectTasks(state).find(({ id }:Task) => id === taskId);

export const selectTasksByQuery = (state:any, query:string) => {
  const tasks = selectTasks(state);

  if (!query || query.trim() === "") {
    return tasks;
  }

  return tasks.filter(({ content }:any) =>
    content.toUpperCase().includes(query.trim().toUpperCase())
  );
};

export default taskSlice.reducer;
