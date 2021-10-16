import { call } from 'redux-saga/effects'

import { HTTP } from 'app/const/App'
import { clientQuery } from 'core/utils/Api'

export function* authLoginRequest({ params, actionSuccess, actionFailure }) {
    try {
        const response = yield call(clientQuery, params)
        if (response && response.status === HTTP.OK) {
            actionSuccess(response)
        } else {
            actionFailure(response)
        }
    } catch (error) {
        actionFailure(error)
    }
}
