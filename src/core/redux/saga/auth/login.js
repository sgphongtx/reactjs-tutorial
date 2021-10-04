import { call } from 'redux-saga/effects'
import { AUTH_LOGIN } from 'app/const/Api'
import { clientQuery } from 'core/utils/Api'

export function* userLogin({ params, actionSuccess, actionFailed }) {
    try {
        const response = yield call(clientQuery(params), AUTH_LOGIN, params)
        if (response && response.success) {
            actionSuccess(response)
        } else {
            actionFailed(response)
        }
    } catch (error) {
        actionFailed(error)
    }
}
