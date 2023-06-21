import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../TasksSlice";
import { TaskStyled } from "./styled";
import Container from "../../../common/Container";
function TaskPages() {
    const { id } = useParams();
    const task = useSelector((state) => getTaskById(state, id));
    return (_jsxs(Container, { children: [_jsx(Header, { title: "Szczeg\u00F3\u0142y zadania" }), _jsx(Section, { title: task ? task.content : "Nie znaleziono zadania :(" }), _jsx(TaskStyled, { children: !!task && (_jsxs(_Fragment, { children: [_jsx("strong", { children: " Uko\u0144czono: " }), task.done ? "Tak" : "Nie"] })) })] }));
}
export default TaskPages;
