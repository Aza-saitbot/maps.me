import {combineReducers} from "redux";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../index";
import ordersReducer from "./ordersReducer/ordersReducer";


const rootReducer=combineReducers({

    orders:ordersReducer
})

export type RootState=ReturnType<typeof rootReducer>
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default rootReducer