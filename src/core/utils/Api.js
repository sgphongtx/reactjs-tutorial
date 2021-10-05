import axios from 'axios'

import { ACCESS_TOKEN, HTTP_RESPONSE_STATUS_CODE } from 'app/const/App'
import { API_ENDPOINT } from 'app/const/Api'
import { getLocalStorage } from 'core/utils/LocalStorage'

const token = getLocalStorage(ACCESS_TOKEN)

export function clientQuery(params, handleSuccess, handleFailure) {
    const url = params.url ? params.url : ''
    const method = params.method ? params.method : 'GET'
    const data = params.data ? params.data : {}
    return axios({
        // `method` is the request method to be used when making the request
        method: method.toLowerCase(),
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: API_ENDPOINT,
        // `url` is the server URL that will be used for the request
        url: url,
        // `headers` are custom headers to be sent
        // headers: {
        //     'X-Requested-With': 'XMLHttpRequest',
        //     'Content-Type': 'application/json',
        //     Authorization: `Bearer ${token}`,
        //     // `validateStatus` defines whether to resolve or reject the promise for a given
        //     // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        //     // or `undefined`), the promise will be resolved; otherwise, the promise will be
        //     // rejected.
        //     validateStatus: function (status) {
        //         return status >= 200 && status < 300 // default
        //     }
        // },
        data: data
    })
        .then(response => {
            console.log(`response`, response)
            if (response.status === HTTP_RESPONSE_STATUS_CODE.EXPIRED_TOKEN) {
                // remove token and redirect to login page the page for them
                return Promise.reject({ message: 'Please re-authenticate.' })
            }
            // Success
            if (response.status === HTTP_RESPONSE_STATUS_CODE.OK) {
                typeof handleSuccess === 'function' && handleSuccess(data)
                return data
            } else {
                typeof handleFailure === 'function' && handleFailure(data)
                return Promise.reject(data)
            }
        })
        .catch(error => {
            // Error
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data)
                console.log(error.response.status)
                console.log(error.response.headers)
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                console.log(error.request)
            } else {
                // Something happened in setting up the request and triggered an Error
                console.log('Error', error.message)
            }
            console.log(error.config)
        })
}
