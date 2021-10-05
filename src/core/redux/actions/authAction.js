import { ACTION_TYPE } from 'app/const/ActionType'

export const authLoginRequest = (params, actionSuccess, actionFailure = () => {}) => {
    return { type: ACTION_TYPE.AUTH_LOGIN_REQUEST, params, actionSuccess, actionFailure }
}
