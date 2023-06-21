import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../TasksSlice";
import { TaskStyled } from "./styled";
import Container from "../../../common/Container";

interface TaskParams {
  id: any;
}

function TaskPages() {
  const { id } = useParams<TaskParams>();
  const task = useSelector((state) => getTaskById(state, id));

  return (
    <Container>
      <Header title="Szczegóły zadania" />
      <Section
        title={task ? task.content : "Nie znaleziono zadania :("}
      ></Section>
      <TaskStyled>
        {!!task && (
          <>
            <strong> Ukończono: </strong>
            {task.done ? "Tak" : "Nie"}
          </>
        )}
      </TaskStyled>
    </Container>
  );
}

export default TaskPages;
