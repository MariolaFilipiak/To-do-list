import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/authorPage/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routers";
import Navigation from "./Navigation";
export const App = () => (_jsxs(HashRouter, Object.assign({ basename: "/to-do-list" }, { children: [_jsx(Navigation, {}), _jsxs(Switch, { children: [_jsx(Route, Object.assign({ path: toTask() }, { children: _jsx(TaskPage, {}) })), _jsx(Route, Object.assign({ path: toTasks() }, { children: _jsx(TasksPage, {}) })), _jsx(Route, Object.assign({ path: toAuthor() }, { children: _jsx(AuthorPage, {}) })), _jsx(Route, Object.assign({ path: "/" }, { children: _jsx(Redirect, { to: toTasks() }) }))] })] })));
