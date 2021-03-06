import {applyMiddleware, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./redusers/rootReducer";
import {rootSaga} from "./sagas/rootSaga";
import {composeEnhancers} from "../utils/utils";


const sagaMiddleware=createSagaMiddleware()

const store=createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(sagaMiddleware)
    )
)

export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga)

export default store