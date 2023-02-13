import {
  takeEvery,
  call,
  put,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import { getExampleTasks } from "../getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  exampleTasks,
  selectTasks,
  exampleTasksError,
  exampleTasksSuccess,
} from "./TasksSlice";

function* exampleTasksHandler() {
  try {
    yield delay(1000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(exampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(exampleTasksError());
    yield call(alert, "Coś poszło nie tak!");
  }
}
function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeLatest(exampleTasks.type, exampleTasksHandler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
