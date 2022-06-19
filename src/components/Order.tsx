import React, {FC, useState} from 'react';
import '../App.scss'
import {Dropdown, Menu, MenuProps} from "antd";
import {OrderType} from "../redux/types/types";
import {useAppDispatch} from "../redux/redusers/rootReducer";
import {ordersTypes} from "../redux/redusers/ordersReducer/ordersReducer";

type Props = {
    order: OrderType
    selectedOrder: OrderType | null
}


const Order: FC<Props> = ({order, selectedOrder}) => {
    const dispatch = useAppDispatch()
    const [currentLoading, setCurrentLoading] = useState<string>(order.loading[0].key)
    const [currentUploading, setCurrentUploading] = useState<string>(order.uploading[0].key)

    const onHandlerLoading: MenuProps['onClick'] = (e) => {
        const isLoading=order.loading.find(i=>i.key === e.key)
        if (isLoading){
            dispatch({type:ordersTypes.SET_POINT_A,payload:isLoading.coordinates})
        }
        setCurrentLoading(e.key)

    }

    const onHandlerUploading: MenuProps['onClick'] = (e) => {
        const isLoading=order.uploading.find(i=>i.key === e.key)
        if (isLoading){
            dispatch({type:ordersTypes.SET_POINT_B,payload:isLoading.coordinates})
        }
        setCurrentUploading(e.key)
    }

    const menuLoading = (
            <Menu
                key={order.id}
                onClick={onHandlerLoading}
                selectedKeys={[currentLoading]}
                items={order.loading}
                />

    );
    const menuUploading = (
        <Menu
             onClick={onHandlerUploading}
            selectedKeys={[currentUploading]}
            selectable
            items={order.uploading}
        />
    );


    return (
        <div
            onClick={() =>dispatch({type: ordersTypes.SELECTED_ORDER, payload: order})}
            className={`App__orders__list__item ${selectedOrder && selectedOrder.id === order.id ? 'selected' : ''}`}
            key={order.id}
        >
            <div className="App__orders__list__item__label">
                {order.label}
            </div>
            <div className="App__orders__list__item__dropdown">
                <div className="App__orders__list__item__dropdown_item">
                    <h3>Погрузка</h3>
                    <Dropdown overlay={menuLoading}>
                        <div className="App__orders__list__item__dropdown_item_select"
                             onClick={e => e.preventDefault()}>
                            {order.loading.find(i=>i.key===currentLoading)?.label}
                        </div>
                    </Dropdown>
                </div>
                <div className="App__orders__list__item__dropdown_item">
                    <h3>Разгрузка:</h3>
                        <Dropdown  overlay={menuUploading}>

                            <div className="App__orders__list__item__dropdown_item_select" onClick={e => e.preventDefault()} >
                                {order.uploading.find(i=>i.key===currentUploading)?.label}
                            </div>
                        </Dropdown>

                </div>


            </div>
        </div>
    );
};

export default Order;