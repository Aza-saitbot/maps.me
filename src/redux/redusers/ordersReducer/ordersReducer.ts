import {
    OrdersActions,
    OrdersState,
    OrderType,
    setSelectedOrderSuccess
} from "../../types/types";
import {mockListOrders} from "../../../utils/MockListOrders";


export enum ordersTypes {
    SELECTED_ORDER='SELECTED_ORDER',
    SET_POINT_A='SET_POINT_A',
    SET_POINT_B='SET_POINT_B'

}



const initialState:OrdersState={
    selectedOrder:null,
    listOrders:mockListOrders,
    pointA:[],
    pointB:[]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState,action:OrdersActions)=>{
    switch (action.type) {
        case ordersTypes.SELECTED_ORDER:
            return {
                ...state,
                selectedOrder:action.payload
            };
        case ordersTypes.SET_POINT_A:
            return {
                ...state,
                pointA:action.payload
            };
        case ordersTypes.SET_POINT_B:
            return {
                ...state,
                pointB:action.payload
            };
        default:
            return state

    }
}

export const setSelectedOrderCreator = (
    payload: OrderType
): setSelectedOrderSuccess => ({
    type: ordersTypes.SELECTED_ORDER,
    payload
});


