import Axios from 'axios'
// import 'dotenv/config'

const axios = Axios.create({
    baseURL:  'http://localhost:8000',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
    withXSRFToken: true
})

export default axios