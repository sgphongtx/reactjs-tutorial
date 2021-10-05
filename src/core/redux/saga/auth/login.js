import { call } from 'redux-saga/effects'
import { clientQuery } from 'core/utils/Api'

export function* authLoginRequest({ params, actionSuccess, actionFailure }) {
    try {
        const response = yield call(clientQuery(params))
        console.log(`response`, response)
        if (response && response.success) {
            actionSuccess(response)
        } else {
            actionFailure(response)
        }
    } catch (error) {
        actionFailure(error)
    }
}
