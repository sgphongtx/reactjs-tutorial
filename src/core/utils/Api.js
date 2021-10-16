import axios from 'axios'

import { ACCESS_TOKEN, HTTP } from 'app/const/App'
import { API_ENDPOINT } from 'app/const/Api'
import { getLocalStorage } from 'core/utils/LocalStorage'

const token = getLocalStorage(ACCESS_TOKEN)

export const clientQuery = async params => {
    const url = params.url ? params.url : ''
    const method = params.method ? params.method : 'GET'
    const data = params.data ? params.data : {}
    return await axios({
        // `method` is the request method to be used when making the request
        method: method.toLowerCase(),
        // `baseURL` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
        // to methods of that instance.
        baseURL: API_ENDPOINT,
        // `url` is the server URL that will be used for the request
        url: url,
        // `headers` are custom headers to be sent
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            Accept: 'application/json',
            Authorization: token
        },
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 1000, // default is `0` (no timeout)
        data: data
    })
        .then(response => {
            if (response.status === HTTP.EXPIRED_TOKEN) {
                // remove token and redirect to login page the page for them
                return Promise.reject({ message: 'Please re-authenticate.' })
            } else {
                return response.data
            }
        })
        .catch(error => {
            // handle error
            console.log(error)
        })
}
