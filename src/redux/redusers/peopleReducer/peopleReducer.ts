import {PeopleActions, PeopleState} from "../../types/types";
import {peopleTypes} from "../../Actiontypes/peopleTypes";


const initialState:PeopleState={
    pending:false,
    people:[],
    error:null
}

export default (state=initialState,action:PeopleActions)=>{
    switch (action.type) {
        case peopleTypes.FETCH_PEOPLE_REQUEST:
            return {
                ...state,
                pending: true
            };
        case peopleTypes.FETCH_PEOPLE_SUCCESS:
            return {
                ...state,
                pending: false,
                people: action.payload,
                error: null
            };
        case peopleTypes.FETCH_PEOPLE_FAILURE:
            return {
                ...state,
                pending: false,
                people: [],
                error: action.payload.error
            };
        default:
            return {
                ...state
            };
    }
}