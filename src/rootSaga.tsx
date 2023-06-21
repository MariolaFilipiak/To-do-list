import {all} from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/TasksSaga";

export default function* rootSaga() {
    yield all([
        tasksSaga(),
    ]);
}