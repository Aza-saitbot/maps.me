import {peopleTypes} from "../../Actiontypes/peopleTypes";
import {
    FetchPeopleFailure,
    FetchPeopleFailurePayload,
    FetchPeopleRequest,
    FetchPeoplesSuccess,
    PeopleType
} from "../../types/types";


export const fetchPeopleRequest = (): FetchPeopleRequest => ({
    type: peopleTypes.FETCH_PEOPLE_REQUEST
});

export const fetchPeoplesSuccess = (
    payload: Array<PeopleType>
): FetchPeoplesSuccess => ({
    type: peopleTypes.FETCH_PEOPLE_SUCCESS,
    payload
});

export const fetchPlanetsSuccess = (
    payload: Array<PeopleType>
): FetchPeoplesSuccess => ({
    type: peopleTypes.FETCH_PEOPLE_SUCCESS,
    payload
});

export const fetchPeopleFailure = (
    payload: FetchPeopleFailurePayload
): FetchPeopleFailure => ({
    type: peopleTypes.FETCH_PEOPLE_FAILURE,
    payload
});