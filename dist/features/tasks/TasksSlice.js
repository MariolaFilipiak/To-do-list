import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";
const initialState = {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
    loading: false,
};
const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: ({ tasks }, action) => {
            tasks.push(action.payload);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, action) => {
            const task = tasks.find((t) => t.id === action.payload);
            if (task) {
                task.done = !task.done;
            }
        },
        removeTask: ({ tasks }, action) => {
            const index = tasks.findIndex((t) => t.id === action.payload);
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
        exampleTasksSuccess: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
        exampleTasksError: (state) => {
            state.loading = false;
        },
        setTasks: (state, action) => {
            state.tasks = action.payload;
            state.loading = false;
        },
    },
});
export const { addTask, toggleHideDone, toggleTaskDone, removeTask, setAllDone, exampleTasks, exampleTasksSuccess, exampleTasksError, setTasks, } = taskSlice.actions;
const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTaskEmpty = (state) => selectTasks(state).length === 0;
export const selectIsEveryTaskDone = (state) => selectTasks(state).every(({ done }) => done);
export const selectLoading = (state) => selectTasksState(state).loading;
export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);
export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);
    if (!query || query.trim() === "") {
        return tasks;
    }
    return tasks.filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};
export default taskSlice.reducer;
