import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { List, ToggleDoneButton, ToggleRemoveButton, Item, } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery, } from "../../TasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routers";
import { useQueryParameter } from "../../queryParameters";
import { StyledLink } from "./styled";
const TasksList = () => {
    var _a;
    const query = (_a = useQueryParameter(searchQueryParamName)) !== null && _a !== void 0 ? _a : "";
    const tasks = useSelector((state) => selectTasksByQuery(state, query));
    const hideDone = useSelector((state) => selectHideDone(state));
    const dispatch = useDispatch();
    return (_jsx(List, { children: tasks.map((task) => (_jsxs(Item, Object.assign({ hidden: task.done && hideDone }, { children: [_jsx(ToggleDoneButton, Object.assign({ onClick: () => dispatch(toggleTaskDone(task.id)) }, { children: task.done ? "✔" : "" })), _jsx(StyledLink, Object.assign({ to: toTask({ id: task.id }) }, { children: task.content })), _jsx(ToggleRemoveButton, Object.assign({ onClick: () => dispatch(removeTask(task.id)) }, { children: "\uD83D\uDDD1" }))] }), task.id))) }));
};
export default TasksList;
