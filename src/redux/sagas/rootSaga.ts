import {all, call, spawn} from "redux-saga/effects";
import {ordersWatcher} from "./ordersSaga/ordersSaga";



export function* rootSaga() {

    const sagas=[ordersWatcher]


    const retrySagas= sagas.map(saga=>{

        return spawn(function* (){
            while (true){
                try {
                    yield call(saga)
                    break;
                }catch (e) {
                    console.log('e',e)
                }
            }
        })
    })


    yield all(retrySagas);
}
