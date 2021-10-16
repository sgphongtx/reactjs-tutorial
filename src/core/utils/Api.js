import axios from 'axios'

import { ACCESS_TOKEN, HTTP } from 'app/const/App'
import { API_ENDPOINT } from 'app/const/Api'
import { getLocalStorage } from 'core/utils/LocalStorage'

const token = getLocalStorage(ACCESS_TOKEN)

export const clientQuery = async params => {
    const url = params.url ? params.url : ''
    const method = params.method ? params.method : 'GET'
    const data = params.data ? params.data : {}

    const onSuccess = response => {
        if (response.status === HTTP.EXPIRED_TOKEN) {
            // remove token and redirect to login page the page for them
            return Promise.reject({ message: 'Please re-authenticate.' })
        } else {
            return response.data
        }
    }

    const onError = error => {
        console.error('Request Failed:', error.config)

        if (error.response) {
            // Request was made but server responded with something
            // other than 2xx
            console.error('Status:', error.response.status)
            console.error('Data:', error.response.data)
            console.error('Headers:', error.response.headers)
        } else {
            // Something else happened while setting up the request
            // triggered the error
            console.error('Error Message:', error.message)
        }

        return Promise.reject(error.response || error.message)
    }

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
            Authorization: `Bearer ${token}`
        },
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 1000, // default is `0` (no timeout)
        data: data
    })
        .then(onSuccess)
        .catch(onError)
}
