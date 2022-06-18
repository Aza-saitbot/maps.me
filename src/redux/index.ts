import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./redusers/rootReducer";
import {rootSaga} from "./sagas/rootSaga";


const sagaMiddleware=createSagaMiddleware()

const store=createStore(rootReducer,applyMiddleware(sagaMiddleware))

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga)

export default store