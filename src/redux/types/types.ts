
import {peopleTypes} from "../Actiontypes/peopleTypes";


export type PeopleType={
    name: string,
    height: string,
    mass:string,
    hair_color:string,
    skin_color: string,
    eye_color: string,
    birth_year:string,
    gender: string,
    homeworld: string,
    films: Array<string>,
    species: Array<any>,
    vehicles: Array<string>,
    starships: Array<string>,
    created: string,
    edited: string,
    url: string
}



export interface PeopleState {
    pending:boolean
    people: Array<PeopleType>;
    error:null|string
}

export type FetchPeoplesSuccessPayload= {
    count: number,
    next: string,
    previous: null,
    results: Array<PeopleType>
}

export interface FetchPeopleFailurePayload {
    error: string;
}

export interface FetchPeopleRequest {
    type: typeof peopleTypes.FETCH_PEOPLE_REQUEST;
}


export type FetchPeoplesSuccess = {
    type: typeof peopleTypes.FETCH_PEOPLE_SUCCESS;
    payload: Array<PeopleType>
};

export interface FetchPeoplesFailurePayload {
    error: string;
}


export type FetchPeopleFailure = {
    type: typeof peopleTypes.FETCH_PEOPLE_FAILURE;
    payload: FetchPeoplesFailurePayload;
};

export type PeopleActions = FetchPeopleRequest
    | FetchPeoplesSuccess | FetchPeopleFailure
