import {all, call, spawn} from "redux-saga/effects";
import peopleSaga from "./peopleSaga/peopleSaga";


export function* rootSaga() {

    const sagas=[peopleSaga]


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
