import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
function TasksPages() {
    return (_jsxs(Container, { children: [_jsx(Header, { title: "Lista zada\u0144" }), _jsx(Section, { title: "Dodaj nowe zadanie", body: _jsx(Form, {}) }), _jsx(Section, { title: "Wyszukiwarka", body: _jsx(Search, {}) }), _jsx(Section, { title: "Lista zada\u0144", body: _jsx(TaskList, {}), extraHeaderContent: _jsx(Buttons, {}) })] }));
}
export default TasksPages;
