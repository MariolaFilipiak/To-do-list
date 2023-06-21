import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Wrapper } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectAreTaskEmpty, selectHideDone, selectIsEveryTaskDone, toggleHideDone, setAllDone, } from "../../TasksSlice";
import { Button } from "../Button/styled";
const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTaskEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (_jsx(Wrapper, { children: !areTasksEmpty && (_jsxs(_Fragment, { children: [_jsxs(Button, Object.assign({ onClick: () => dispatch(toggleHideDone()) }, { children: [hideDone ? "Pokaż " : "Ukryj ", " uko\u0144czone"] })), _jsx(Button, Object.assign({ onClick: () => dispatch(setAllDone()), disabled: isEveryTaskDone }, { children: "Uko\u0144cz wszystkie" }))] })) }));
};
export default Buttons;
