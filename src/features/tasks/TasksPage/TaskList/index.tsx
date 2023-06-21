import {
  List,
  Content,
  ToggleDoneButton,
  ToggleRemoveButton,
  Item,
} from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../TasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routers";
import { useQueryParameter } from "../../queryParameters";
import { StyledLink } from "./styled";
import { RootState } from "../../../../store";

interface Task {
  id: string;
  content: string;
  done: boolean;
}

const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName) ?? "";
  const tasks = useSelector((state: RootState) => selectTasksByQuery(state, query));
  const hideDone = useSelector((state: RootState) => selectHideDone(state));

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task:Task) => (
         <Item key={task.id} hidden={task.done && hideDone}>
         <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
           {task.done ? "✔" : ""}
         </ToggleDoneButton>
         <StyledLink to={toTask({ id: task.id })}>
           {task.content}
         </StyledLink>
         <ToggleRemoveButton
           onClick={() => dispatch(removeTask(task.id))}
         >
           🗑
         </ToggleRemoveButton>
       </Item>
      ))}
    </List>
  );
};

export default TasksList;
