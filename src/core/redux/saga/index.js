import { all } from 'redux-saga/effects'

import { userLoginWatcher } from './auth'

export default function* rootSaga() {
    yield all([userLoginWatcher()])
}
