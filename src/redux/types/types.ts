import {Action} from "redux";
import {ordersTypes} from "../redusers/ordersReducer/ordersReducer";


export interface SelectedOrderType extends Action, OrderType {type: ordersTypes.SELECTED_ORDER }

export type PointType={
    key:string,
    label:string,
    coordinates:Array<number>
}

export type OrderType={
    id:number
    label:string
    loading:Array<PointType>
    uploading:Array<PointType>
}

export type setSelectedOrderSuccess = {
    type: typeof ordersTypes.SELECTED_ORDER
    payload: OrderType
};

export type setPointASuccess = {
    type: typeof ordersTypes.SET_POINT_A
    payload: Array<number>
};

export type setPointBSuccess = {
    type: typeof ordersTypes.SET_POINT_B
    payload: Array<number>
};


export interface OrdersState {
    selectedOrder:OrderType|null
    listOrders:Array<OrderType>
    pointA:Array<number>
    pointB:Array<number>
}


export type OrdersActions = setSelectedOrderSuccess | setPointASuccess | setPointBSuccess
