import {
    call, 
    takeEvery, 
    put, 
    race, 
    all, 
    delay, 
    select
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as constants from '../resources/constants';
import * as tagActions from '../actions/tags';
import * as types from '../types/tags';
import * as schemas from '../schemas/tags';
import * as selectors from '../reducers';


function* fetchTags(action) {
    try {
        const response = yield call(
            fetch,
            `${constants.API_BASE_URL_ANDROID}/tag/`,
            {
                method:'GET',
                headers:{
                    'Authorization':`${yield select(selectors.getAuthToken)}`,
                    'Content-Type':'application/json'
                },
            }
        );
        if (response.status === 200){
            const jsonResult = yield response.json();
            const order = jsonResult.map(tag => tag.id);
            const entities = {};
            jsonResult.map(tag => entities[tag.id] = tag)
            yield put(
                tagActions.completeFetchingTags(entities, order)
            )
        } else{
            const jsonError = yield response.json();
            tagActions.failFetchingTags(jsonError);
        }
    } catch (error) {
        console.log(error.message)
    }
}

export function* watchTagsFetch() {
    yield takeEvery(
        types.TAG_FETCH_STARTED,
        fetchTags
    )
}
