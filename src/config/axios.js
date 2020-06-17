import Axios from 'axios'
const token = localStorage.getItem('token')
const axios = Axios.create({
    baseURL: 'http://dct-ticket-master.herokuapp.com'
})

axios.interceptors.request.use(function (config) {
    config.headers = {
        "x-auth": token
    }
    return config
})

export default axios