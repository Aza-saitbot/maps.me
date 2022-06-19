import {put, takeEvery} from "redux-saga/effects";
import {ordersTypes, setSelectedOrderCreator} from "../../redusers/ordersReducer/ordersReducer";
import {SelectedOrderType} from "../../types/types";


function* setSelectedOrderWorker(data:SelectedOrderType) {
    yield
put(setSelectedOrderCreator(data))
}

export function* ordersWatcher() {
    yield takeEvery(ordersTypes.SELECTED_ORDER,setSelectedOrderWorker);
}
