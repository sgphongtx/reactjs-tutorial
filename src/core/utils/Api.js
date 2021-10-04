import axios from 'axios'

import { ACCESS_TOKEN } from 'app/const/App'
import { API_ENDPOINT } from 'app/const/Api'
import { getLocalStorage } from 'core/utils/LocalStorage'

const token = getLocalStorage(ACCESS_TOKEN)

const axiosInstance = axios.create({
    baseURL: API_ENDPOINT,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
})

export const getWithToken = () => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export const postWithToken = (url, params) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`
    axiosInstance
        .post(`${API_ENDPOINT}${url}`, params)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
}
