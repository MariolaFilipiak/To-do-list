import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/styled";
import { exampleTasks, selectLoading } from "../../TasksSlice";

const ExampleTasksButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  return (
    <Button onClick={() => dispatch(exampleTasks())} disabled={loading}>
      {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleTasksButton;
