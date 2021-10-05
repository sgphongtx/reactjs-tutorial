import { takeLatest } from 'redux-saga/effects'

import { ACTION_TYPE } from 'app/const/ActionType'

import { authLoginRequest } from './login'

export function* authLoginWatcher() {
    yield takeLatest(ACTION_TYPE.AUTH_LOGIN_REQUEST, authLoginRequest)
}
