import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import AuthorPage from "./features/authorPage/AuthorPage";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import { toAuthor, toTask, toTasks } from "./routers";
import Navigation from "./Navigation";

export const App = () => (
  <HashRouter basename="/to-do-list">
    <Navigation/>
        <Switch>
        <Route path={toTask()}>
            <TaskPage />
          </Route>
          <Route path={toTasks()}>
            <TasksPage />
          </Route>
          <Route path={toAuthor()}>
            <AuthorPage/>
          </Route>
          <Route path="/">
            <Redirect to={toTasks()}/>
          </Route>
        </Switch>
  </HashRouter>
);
