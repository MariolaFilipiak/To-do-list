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
const TasksList = () => {
  const query = useQueryParameter(searchQueryParamName);
  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton
            toggleDone
            onClick={() => dispatch(toggleTaskDone(task.id))}
          >
            {task.done ? "✔" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <StyledLink to={toTask({ id: task.id })}>
              {" "}
              {task.content}
            </StyledLink>
          </Content>
          <ToggleRemoveButton
            remove
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
