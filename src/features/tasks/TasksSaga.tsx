import {
  takeEvery,
  call,
  put,
  takeLatest,
  select,
  delay,
} from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";
import {
  exampleTasks,
  selectTasks,
} from "./TasksSlice";


function* saveTasksInLocalStorageHandler(): Generator<any, void, any> {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
