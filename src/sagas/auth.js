import {
    call,
    takeEvery,
    put,
    select,
} from 'redux-saga/effects';
  
import * as constants from '../resources/constants';
import * as actions from '../actions/auth';
import * as types from '../types/auth';
import * as selectors from '../reducers';
  
  
function* login(action) {
    console.log('login started')
    try {
        const response = yield call(
            fetch,
            `${constants.API_BASE_URL_ANDROID}/token-auth/`,
            {
                method: 'POST',
                body: JSON.stringify(action.payload),
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );
  
        if (response.status === 200) {
            const { token } = yield response.json();
            yield put(actions.completeLogin(token));
        } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failLogin(non_field_errors[0]));
        }
    } catch (error) {
        yield put(actions.failLogin('Error en el login. Compruebe su conexión a internet.'));
    }
}
  
export function* watchLoginStarted() {
    yield takeEvery(
        types.AUTHENTICATION_STARTED,
        login,
    );
}
  
function* refreshToken(action) {
    const expiration = yield select(selectors.getAuthExpiration);
    const now = parseInt(new Date().getTime() / 1000, 10)
  
    if(expiration - now < 3000){
        try {
            const response = yield call(
                fetch,
                `${constants.API_BASE_URL_ANDROID}/token-refresh/`,
                {
                    method: 'POST',
                    body: JSON.stringify(action.payload),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                },
            );
  
            if (response.status === 200) {
                const { token } = yield response.json();
                yield put(actions.completeTokenRefresh(token));
            } else {
                const { non_field_errors } = yield response.json();
                yield put(actions.failLogin(non_field_errors[0]));
            }
        } catch (error) {
            yield put(actions.failTokenRefresh(error.toString()))
        }
    }
}
  
export function* watchRefreshTokenStarted() {
    yield takeEvery(
        types.TOKEN_REFRESH_STARTED,
        refreshToken,
    )
}

function* getInfo(action) {
    console.log('info fetch started')
    const userId = yield select(selectors.getDecoded);
    try{
        console.log(userId)
        const response = yield call(
            fetch,
            `${constants.API_BASE_URL_ANDROID}/users/${userId.decoded.user_id}/info/`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        );

        if (response.status === 200) {
            const info = yield response.json()
            yield put(actions.completeFetchingInfo(info))
        } else {
            const { non_field_errors } = yield response.json();
            yield put(actions.failFetchingInfo(non_field_errors[0]));
        }
    }catch (error) {
        console.log('something went wrong')
        console.log(error)
    }
}

export function* watchGetInfo() {
    yield takeEvery(
        types.INFO_FETCH_STARTED,
        getInfo,
    )
}