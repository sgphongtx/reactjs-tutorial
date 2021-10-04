import { takeLatest } from 'redux-saga/effects'

import { ACTION_TYPE } from 'app/const/ActionType'

import { userLogin } from './login'

export function* userLoginWatcher() {
    yield takeLatest(ACTION_TYPE.AUTH_LOGIN_REQUEST, userLogin)
}
