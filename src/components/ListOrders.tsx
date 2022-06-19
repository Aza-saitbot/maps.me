import React, {useEffect} from 'react';
import './../App.scss'
import {useAppDispatch, useAppSelector} from "../redux/redusers/rootReducer";
import Order from "./Order";
import {ordersTypes} from "../redux/redusers/ordersReducer/ordersReducer";

type Props={
    width:number
}

const ListOrders:React.FC<Props>= ({width}) => {
    const listOrders = useAppSelector(state => state.orders.listOrders)
    const selectedOrder = useAppSelector(state => state.orders.selectedOrder)
    const dispatch=useAppDispatch()



    useEffect(()=>{
        dispatch({type: ordersTypes.SELECTED_ORDER, payload: listOrders[0]})
        dispatch({type:ordersTypes.SET_POINT_A,payload:listOrders[0].loading[0].coordinates})
        dispatch({type:ordersTypes.SET_POINT_B,payload:listOrders[0].uploading[0].coordinates})
    }, [dispatch, listOrders])

    return (
           <div style={{width}}
                className="App__orders">
                   <div className="App__orders__list">
                       <h3>Заявки:</h3>
                       {listOrders.map(order =>
                           <Order key={order.id} order={order} selectedOrder={selectedOrder} />
                       )}
                   </div>

           </div>
    );
};

export default ListOrders;

