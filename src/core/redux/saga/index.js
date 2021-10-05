import { all } from 'redux-saga/effects'

import { authLoginWatcher } from './auth'

export default function* rootSaga() {
    yield all([authLoginWatcher()])
}
