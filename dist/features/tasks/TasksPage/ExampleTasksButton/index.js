import { jsx as _jsx } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/styled";
import { exampleTasks, selectLoading } from "../../TasksSlice";
const ExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);
    return (_jsx(Button, Object.assign({ onClick: () => dispatch(exampleTasks()), disabled: loading }, { children: loading ? "Ładowanie..." : "Pobierz przykładowe zadania" })));
};
export default ExampleTasksButton;
