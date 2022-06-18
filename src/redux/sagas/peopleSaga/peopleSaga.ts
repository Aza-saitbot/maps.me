import axios, {AxiosResponse} from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";


import {peopleTypes} from "../../Actiontypes/peopleTypes";
import { FetchPeoplesSuccessPayload} from "../../types/types";
import {fetchPeopleFailure, fetchPeoplesSuccess} from "../../actions/peopleActions/peopleActions";

const swapiGet = (patters:string)=>
    axios.get<FetchPeoplesSuccessPayload>(`https://swapi.dev/api/${patters}`);

function* fetchPeopleSaga() {
    try {
        const peoples:AxiosResponse<FetchPeoplesSuccessPayload> = yield call(swapiGet,'people');
      //  const planets:AxiosResponse<FetchPeoplesSuccessPayload> = yield call(swapiGet,'planets');
        yield put(
            fetchPeoplesSuccess(peoples.data.results)
        );
    } catch (e) {
        let message = 'Unknown Error'
        if (e instanceof Error) message = e.message
        yield put(
            fetchPeopleFailure({
                error: message
            })
        );
    }
}

function* peopleSaga() {
    yield all([takeLatest(peopleTypes.FETCH_PEOPLE_REQUEST, fetchPeopleSaga)]);
}

export default peopleSaga;