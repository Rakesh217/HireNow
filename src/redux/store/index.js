import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import reducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

let middleware = [sagaMiddleware];

// if (process.env.NODE_ENV === "development") {
//   middleware.push(logger);
// }

export const store = createStore(reducers, applyMiddleware(...middleware));

export default store;

sagaMiddleware.run(rootSaga);
